const ACTOR_NAME = `Patreon-crawler`;

export enum RequestLabel {
    DETAIL = 'DETAIL',
    CAMPAIGN = 'CAMPAIGN',
    POSTS = 'POSTS',
}

export const postsUrlByCampaignId = (campaignId: string, pageCursor?: string): string => {
    const postsUrl = new URL('https://www.patreon.com/api/posts');

    const searchOptions: Record<string, unknown> = {
        'filter[campaign_id]': campaignId,
        sort: '-published_at',
        'json-api-use-default-includes': false,
        'json-api-version': '1.0',
    };

    if (pageCursor != null) {
        searchOptions['page[cursor]'] = pageCursor;
    }

    // TODO to function
    postsUrl.search = Object.entries(searchOptions).reduce((acc, [key, value], currentIndex) => {
        return `${acc}${currentIndex === 0 ? '?' : '&'}${key}=${value}`;
    }, '');

    return postsUrl.toString();
};

const postfixId = process.env.APIFY_ACTOR_RUN_ID ?? new Date().getTime().toString();

export const DATASET_NAMES = {
    get posts() {
        return `${ACTOR_NAME}-${postfixId}-posts`;
    },
    get campaigns() {
        return `${ACTOR_NAME}-${postfixId}-campaigns`;
    },
    get comments() {
        return `${ACTOR_NAME}-${postfixId}-comments`;
    },
};
