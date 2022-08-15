// generated via http://json2ts.com

interface Image {
    height: number;
    large_url: string;
    thumb_square_large_url: string;
    thumb_square_url: string;
    thumb_url: string;
    url: string;
    width: number;
}

interface Attributes {
    comment_count: number;
    created_at: Date;
    current_user_can_delete: boolean;
    current_user_can_view: boolean;
    deleted_at?: any;
    edit_url: string;
    edited_at: Date;
    has_ti_violation: boolean;
    image: Image;
    is_automated_monthly_charge: boolean;
    is_paid: boolean;
    like_count: number;
    min_cents_pledged_to_view?: any;
    moderation_status: string;
    patreon_url: string;
    pledge_url: string;
    post_level_suspension_removal_date?: any;
    post_type: string;
    published_at: Date;
    scheduled_for?: any;
    teaser_text: string;
    title: string;
    url: string;
    video_preview?: any;
    was_posted_by_campaign_owner: boolean;
}

interface Datum {
    attributes: Attributes;
    id: string;
    type: string;
}

interface Links {
    next: string;
}

interface Cursors {
    next: string;
}

interface Pagination {
    cursors: Cursors;
    total: number;
}

interface Meta {
    pagination: Pagination;
}

export interface PostsResponse {
    data: Datum[];
    links: Links;
    meta: Meta;
}
