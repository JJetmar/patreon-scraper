import { CrawlerError } from '../error/crawler-error.js';
import { RouteHandler } from '../types/routeHandler.js';
import { useDataset } from '../utils.js';
import { DATASET_NAMES, postsUrlByCampaignId, RequestLabel } from '../constants.js';
import { PostsResponse } from '../types/data/posts.js';

export const postsHandler: RouteHandler = async ({ request, body, crawler: { requestQueue } }) => {
    const { campaignId } = request.userData.data;

    let postsData: PostsResponse;
    try {
        postsData = JSON.parse(body.toString());
    } catch (e) {
        throw new CrawlerError(`Problem during parsing posts by campaign id data. (campaignId: ${campaignId})`, { cause: e });
    }

    const dataset = await useDataset(DATASET_NAMES.posts);

    if (!postsData.data) {
        throw new CrawlerError('Problem');
    }

    await dataset.pushData(
        postsData.data.map((data) => {
            // TODO make and util function for this.
            /* eslint-disable camelcase */
            const {
                title,
                teaser_text,
                url,
                comment_count,
                created_at,
                published_at,
                is_paid,
                like_count,
            } = data.attributes;

            return {
                id: data.id,
                campaignId,
                title,
                teaser_text,
                url,
                comment_count,
                created_at,
                published_at,
                is_paid,
                like_count,
            };
            /* eslint-enable camelcase */
        }),
    );

    if (postsData.meta.pagination?.cursors?.next) {
        await requestQueue?.addRequest({
            url: postsUrlByCampaignId(campaignId, postsData.meta.pagination.cursors.next),
            label: RequestLabel.POSTS,
            headers: {
                referer: request.headers!.referer,
            },
            userData: {
                ...request.userData,
            },
        });
    }
};
