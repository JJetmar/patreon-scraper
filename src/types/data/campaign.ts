// generated via http://json2ts.com

interface AvatarPhotoImageUrls {
    default: string;
    default_small: string;
    original: string;
    thumbnail: string;
    thumbnail_large: string;
}

interface CoverPhotoUrlSizes {
    large: string;
    medium: string;
    small: string;
}

interface Attributes {
    avatar_photo_image_urls: AvatarPhotoImageUrls;
    avatar_photo_url: string;
    campaign_pledge_sum: number;
    cover_photo_url: string;
    cover_photo_url_sizes: CoverPhotoUrlSizes;
    created_at: Date;
    creation_count: number;
    creation_name: string;
    currency: string;
    display_patron_goals: boolean;
    earnings_visibility: string;
    image_small_url: string;
    image_url: string;
    is_charge_upfront: boolean;
    is_charged_immediately: boolean;
    is_monthly: boolean;
    is_nsfw: boolean;
    is_plural: boolean;
    main_video_embed?: any;
    main_video_url?: any;
    name: string;
    one_liner?: any;
    outstanding_payment_amount_cents?: any;
    patron_count: number;
    pay_per_name: string;
    pledge_sum: number;
    pledge_sum_currency: string;
    pledge_url: string;
    published_at: Date;
    summary: string;
    url: string;
}

interface Data2 {
    id: string;
    type: string;
}

interface Links {
    related: string;
}

interface Creator {
    data: Data2;
    links: Links;
}

interface Goals {
    data: any[];
}

interface Datum {
    id: string;
    type: string;
}

interface Rewards {
    data: Datum[];
}

interface Relationships {
    creator: Creator;
    goals: Goals;
    rewards: Rewards;
}

interface Data {
    attributes: Attributes;
    id: string;
    relationships: Relationships;
    type: string;
}

interface Youtube {
    url: string;
}

interface SocialConnections {
    deviantart?: any;
    discord?: any;
    facebook?: any;
    google?: any;
    instagram?: any;
    reddit?: any;
    spotify?: any;
    twitch?: any;
    twitter?: any;
    vimeo?: any;
    youtube: Youtube;
}

interface Attributes2 {
    about: string;
    created: Date;
    default_country_code?: any;
    facebook?: any;
    first_name: string;
    full_name: string;
    gender: number;
    image_url: string;
    last_name: string;
    patron_currency: string;
    social_connections: SocialConnections;
    thumb_url: string;
    twitch?: any;
    twitter?: any;
    url: string;
    vanity: string;
    youtube?: any;
    amount?: number;
    amount_cents?: number;
    created_at?: Date;
    description: string;
    remaining?: number;
    requires_shipping?: boolean;
    user_limit?: any;
    currency: string;
    discord_role_ids: string[];
    edited_at?: Date;
    patron_amount_cents?: number;
    patron_count?: number;
    post_count?: number;
    published?: boolean;
    published_at?: Date;
    title: string;
    unpublished_at?: any;
}

interface Data3 {
    id: string;
    type: string;
}

interface Links2 {
    related: string;
}

interface Relationships2 {
    campaign: {
        data: Data3;
        links: Links2;
    };
}

interface Included {
    attributes: Attributes2;
    id: string;
    relationships: Relationships2;
    type: string;
}

interface Links3 {
    self: string;
}

export interface CampaignResponse {
    data: Data;
    included: Included[];
    links: Links3;
}
