import { Actor, RequestQueue } from 'apify';
import { HttpCrawler, Request } from 'crawlee';
import log from '@apify/log';
import { router as requestHandler } from './routes.js';
import { RequestLabel } from './constants.js';

interface Schema {
    campaigns?: Array<string>;
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

const proxyConfiguration = await Actor.createProxyConfiguration({
    groups: ['RESIDENTIAL'],
});

Actor.main(async () => {
    const input = await Actor.getInput<Schema>();
    log.info('Input:', input);

    const requestQueue = await RequestQueue.open();

    const crawler = new HttpCrawler({
        requestQueue,
        maxRequestRetries: 10,
        maxConcurrency: 10,
        handleRequestTimeoutSecs: 10,
        navigationTimeoutSecs: 10,
        proxyConfiguration,
        additionalMimeTypes: ['application/vnd.api+json'],
        requestHandler,
        persistCookiesPerSession: true,
    });

    if (!input?.campaigns?.length) {
        throw Error('No campaign have been set on input');
    }

    await crawler.run(
        input?.campaigns.map((userInput) => new Request({
            url: campaignUrlByUserSlug(transformToUserSlug(userInput)),
            label: RequestLabel.BOOTSTRAP,
        })),
    );
});
