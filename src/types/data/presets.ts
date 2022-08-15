// generated via http://json2ts.com

interface CcpaCookieDisclosure {
    cookie_name: string;
}

interface AdditionalBannerData {
    ccpa_cookie_disclosure: CcpaCookieDisclosure;
}

interface LockedPostAggregates {
    audio: number;
    image: number;
    link: number;
    livestream: number;
    poll: number;
    total: number;
    update: number;
    video: number;
}

export interface Presets {
    additional_banner_data: AdditionalBannerData;
    badges_polling_enabled: boolean;
    badges_polling_interval_in_seconds: number;
    base_url: string;
    can_campaign_be_age_gated: boolean;
    can_see_nsfw: boolean;
    currency_migration_in_progress: boolean;
    current_banners: string[];
    device_id: string;
    is_anniversary_billing?: any;
    is_impersonating: boolean;
    is_preview: boolean;
    is_published: boolean;
    is_target: boolean;
    js_git_sha: string;
    locked_post_aggregates: LockedPostAggregates;
    num_posts: number;
    page_title: string;
    public_path: string;
    show_acast_button_post_pledge: boolean;
    skip_banner: boolean;
    verify_location?: any;
}
