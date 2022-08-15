// generated via http://json2ts.com

interface CoverPhotoUrlSizes {
    large: string;
    medium: string;
    small: string;
}

interface Attributes {
    avatar_photo_url: string;
    campaign_pledge_sum: number;
    cover_photo_url: string;
    cover_photo_url_sizes: CoverPhotoUrlSizes;
    creation_name: string;
    currency: string;
    display_patron_goals: boolean;
    has_rss: boolean;
    is_monthly: boolean;
    is_nsfw: boolean;
    is_plural: boolean;
    main_video_embed?: any;
    main_video_url?: any;
    name: string;
    one_liner?: any;
    patron_count: number;
    pay_per_name: string;
    pledge_sum: number;
    pledge_sum_currency: string;
    pledge_url: string;
    primary_theme_color?: any;
    published_at: Date;
    show_earnings: boolean;
    show_patron_count: boolean;
    summary: string;
    vanity: string;
}

interface ActiveOffer {
    data?: any;
}

interface Datum {
    id: string;
    type: string;
}

interface ConnectedSocials {
    data: Datum[];
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

interface Datum2 {
    id: string;
    type: string;
}

interface PatronGoals {
    data: Datum2[];
}

interface Data3 {
    id: string;
    type: string;
}

interface Links2 {
    related: string;
}

interface PostAggregation {
    data: Data3;
    links: Links2;
}

interface Datum3 {
    id: string;
    type: string;
}

interface Rewards {
    data: Datum3[];
}

interface Relationships {
    active_offer: ActiveOffer;
    connected_socials: ConnectedSocials;
    creator: Creator;
    goals: Goals;
    patron_goals: PatronGoals;
    post_aggregation: PostAggregation;
    rewards: Rewards;
}

interface Data {
    attributes: Attributes;
    id: string;
    relationships: Relationships;
    type: string;
}

interface AccessKey {
    default?: any;
    validation_type: string;
}

interface CategoryType {
    default: string;
    validation_type: string;
}

interface Content {
    default?: any;
    validation_type: string;
}

interface DeliverViaEmail {
    default?: any;
    validation_type: string;
}

interface DeliverViaWelcomePack {
    default?: any;
    validation_type: string;
}

interface FulfillmentType {
    default?: any;
    validation_type: string;
}

interface IsTracked {
    default?: any;
    validation_type: string;
}

interface ItemType {
    default: string;
    validation_type: string;
}

interface RuleType {
    default?: any;
    validation_type: string;
}

interface TteInterval {
    default?: any;
    validation_type: string;
}

interface Fields {
    access_key: AccessKey;
    category_type: CategoryType;
    content: Content;
    deliver_via_email: DeliverViaEmail;
    deliver_via_welcome_pack: DeliverViaWelcomePack;
    fulfillment_type: FulfillmentType;
    is_tracked: IsTracked;
    item_type: ItemType;
    rule_type: RuleType;
    tte_interval: TteInterval;
}

interface Attributes2 {
    full_name: string;
    vanity: string;
    next_inaccessible_posts_count?: number;
    upgrade_url: string;
    amount?: number;
    amount_cents?: number;
    created_at?: any;
    description: string;
    patron_currency: string;
    remaining?: number;
    requires_shipping?: boolean;
    url: string;
    user_limit?: any;
    currency: string;
    discord_role_ids: string[];
    image_url: string;
    patron_amount_cents?: number;
    patron_count?: number;
    published?: boolean;
    sales_tax_label: string;
    show_plus_tax_label?: boolean;
    title: string;
    completed_percentage?: number;
    number_patrons?: number;
    app_name: string;
    display_name?: any;
    external_profile_url: string;
    is_public?: boolean;
    is_deleted?: boolean;
    is_ended?: boolean;
    is_published?: boolean;
    item_type: string;
    cadence?: number;
    campaign_pledge_cadence_discount_id?: any;
    fields: Fields;
}

interface Data4 {
    id: string;
    type: string;
}

interface Links3 {
    related: string;
}

interface Campaign2 {
    data: Data4;
    links: Links3;
}

interface Datum4 {
    id: string;
    type: string;
}

interface CadenceOptions {
    data: Datum4[];
}

interface Datum5 {
    id: string;
    type: string;
}

interface Items {
    data: Datum5[];
}

interface RewardItemConfiguration {
    data?: any;
}

interface Data5 {
    id: string;
    type: string;
}

interface Links4 {
    related: string;
}

interface Template {
    data: Data5;
    links: Links4;
}

interface Relationships2 {
    campaign: Campaign2;
    cadence_options: CadenceOptions;
    items: Items;
    reward_item_configuration: RewardItemConfiguration;
    template: Template;
}

interface Included {
    attributes: Attributes2;
    id: string;
    relationships: Relationships2;
    type: string;
}

interface Links5 {
    self: string;
}

interface Campaign {
    data: Data;
    included: Included[];
    links: Links5;
}

interface CurrencyConstants {
    big_money_cents: number;
    default_custom_pledge_cents: number;
    default_pledge_amount_cents: number;
    max_pledge_cents: number;
    min_pledge_cents: number;
    payout_minimum: number;
    recommended_minimum_tier_amount: number;
    referral_cents: number;
    tier_minimum_round_to_cents: number;
    tier_recommendation_round_to_cents: number;
}

interface SupportedCurrency {
    available_for_pay_in: boolean;
    available_for_pay_out: boolean;
    code: string;
    default_locale_code: string;
    description: string;
    is_launched: boolean;
    max_pledge_subunits: number;
    num_subunits: number;
    symbol: string;
}

export interface BootstrapResponse {
    campaign: Campaign;
    currency_constants: CurrencyConstants;
    currentUser?: any;
    defaultUserCurrency: string;
    experienceLocationCountryCode: string;
    formattingLocale: string;
    supported_currencies: SupportedCurrency[];
    translationLocale: string;
}
