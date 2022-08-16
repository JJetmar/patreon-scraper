import { Actor, RequestQueue } from 'apify';
import { HttpCrawler, log, Request } from 'crawlee';
import { router as requestHandler } from './routes.js';
import { RequestLabel } from './constants.js';
import { CrawlerError } from './error/crawler-error.js';

interface InputSchema {
    campaigns: Array<string>;
    proxy: {
        'useApifyProxy': boolean,
        'apifyProxyGroups': string[]
    };
}

/**
 * If the user input is a valid username, return it. If it's a valid Patreon URL, return the username from the URL.
 * Otherwise, return the original user input.
 * @returns A function that takes a string and returns a string.
 * @param campaign
 */
const transformToUserSlug = (campaign: string): string => {
    // "theUser" => "theuser"
    const directUsernameInput = campaign.trim().match(/^([\w_]+)$/g)?.[1];
    if (directUsernameInput) {
        return directUsernameInput.toLowerCase();
    }

    // "http://www.patreon.com/theUser/overview" => "theuser", "patreon.com/theUser" => "theUser"
    const userSlugFromUrl = campaign.trim().match(/^(?:https?:\/\/)?(?:www\.)?patreon\.com\/([^/]+)/g)?.[1];
    if (userSlugFromUrl) {
        return userSlugFromUrl.toLowerCase();
    }

    // If no rule applied, just use original user input.
    return campaign.toLowerCase();
};

const campaignUrlByUserSlug = (userSlug: string): string => `https://patreon.com/${userSlug}`;

Actor.main(async () => {
    const input = await Actor.getInput<InputSchema>();

    log.info('INPUT', input);

    if (!input) {
        throw new CrawlerError('No input has been set for this run.');
    }

    if (!(input?.campaigns?.length)) {
        throw new CrawlerError('No campaigns on input has been set for this run.');
    }

    if (!input.proxy) {
        throw new CrawlerError('No proxy on input has been set for this run.');
    }

    const { proxy } = input;

    let proxyConfiguration;

    try {
        proxyConfiguration = await Actor.createProxyConfiguration({
            ...proxy,
        });
    } catch (e) {
        throw new CrawlerError(`Problem during setup up a proxy server.`, { cause: e });
    }

    const requestQueue = await RequestQueue.open();

    const crawler = new HttpCrawler({
        requestQueue,
        maxRequestRetries: 5,
        handleRequestTimeoutSecs: 7,
        navigationTimeoutSecs: 7,
        proxyConfiguration,
        additionalMimeTypes: ['application/vnd.api+json'],
        requestHandler,
        persistCookiesPerSession: true,
    });

    await crawler.run(
        input?.campaigns.map((campaignInput) => new Request({
            url: campaignUrlByUserSlug(transformToUserSlug(campaignInput)),
            label: RequestLabel.DETAIL,
        })),
    );
});
