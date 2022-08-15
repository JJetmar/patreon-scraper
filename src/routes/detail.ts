import { postsUrlByCampaignId, RequestLabel } from '../constants.js';
import { BootstrapResponse } from '../types/data/bootstrap.js';
import { CrawlerError } from '../error/crawler-error.js';
import { RouteHandler } from '../types/routeHandler.js';
import { Presets } from '../types/data/presets.js';

/**
 * "Return the string between the start and end strings, or an empty string if either of the start or end strings are not
 * found."
 *
 * The function takes three parameters:
 *
 * input: The string to search in.
 * start: The string to search for, to find the start of the substring.
 * end: The string to search for, to find the end of the substring.
 * The function returns a string
 * @param {string} input - The string to search in
 * @param {string} start - The string to search for the start of the substring.
 * @param {string} end - The string that marks the end of the search.
 * @returns The substring between the start and end strings.
 */
const contentBetween = (input: string, start: string, end: string) => {
    const startIndex = input.indexOf(start);
    const endIndex = input.indexOf(end, startIndex);

    if (startIndex === -1 || endIndex === -1) return '';
    return input.substring(startIndex + start.length, endIndex);
};

const campaignUrlByCampaignId = (campaignId: string) => {
    return `https://www.patreon.com/api/campaigns/${campaignId}`;
};

export const detailHandler: RouteHandler = async ({ body, request, crawler: { requestQueue } }) => {
    // TODO this part would need an optimization with usage of ReadStream.
    let bootstrap: BootstrapResponse;
    try {
        bootstrap = JSON.parse(contentBetween(body.toString(), 'Object.assign(window.patreon.bootstrap,', `);\n      Object.assign(`));
    } catch (e) {
        throw new CrawlerError('Problem during parsing bootstrap information.', { cause: e });
    }

    let presets: Presets;
    try {
        presets = JSON.parse(contentBetween(body.toString(), 'Object.assign(window.patreon.presets,', `);`));
    } catch (e) {
        throw new CrawlerError('Problem during parsing presets information.', { cause: e });
    }

    const campaignId = bootstrap.campaign.data.id;

    await requestQueue?.addRequest({
        url: campaignUrlByCampaignId(campaignId),
        label: RequestLabel.CAMPAIGN,
        userData: {
            presets,
            data: {
                campaignId,
            },
        },
    });

    // Fetch all the posts
    await requestQueue?.addRequest({
        url: postsUrlByCampaignId(campaignId),
        label: RequestLabel.POSTS,
        headers: {
            referer: request.url,
        },
        userData: {
            data: {
                campaignId,
            },
        },
    });
};
