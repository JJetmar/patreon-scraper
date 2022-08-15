import { RouteHandler } from '../types/routeHandler.js';
import { CrawlerError } from '../error/crawler-error.js';
import { useDataset } from '../utils.js';
import { DATASET_NAMES } from '../constants.js';
import { CampaignResponse } from '../types/data/campaign.js';

export const campaignHandler: RouteHandler = async ({ request, body }) => {
    const { campaignId } = request.userData.data;

    let campaignData: CampaignResponse;
    try {
        campaignData = JSON.parse(body.toString());
    } catch (e) {
        throw new CrawlerError(`Problem during parsing campaign data. (campaignId: ${campaignId})`, { cause: e });
    }

    // TODO make and util function for this.
    /* eslint-disable camelcase */
    const {
        url,
        name,
        is_plural,
        summary,
        one_liner,
        creation_count,
        creation_name,
        published_at,
        created_at,
        is_nsfw,
        image_url,
        patron_count,
        is_monthly,
    } = campaignData.data.attributes;

    const dataset = await useDataset(DATASET_NAMES.campaigns);

    await dataset.pushData({
        id: campaignId,
        name,
        url,
        is_plural,
        summary,
        one_liner,
        creation_count,
        creation_name,
        published_at,
        created_at,
        is_nsfw,
        image_url,
        patron_count,
        is_monthly,
    });
    /* eslint-enable camelcase */
};
