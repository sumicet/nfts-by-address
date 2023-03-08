export interface Asset {
    id: number;
    description: string | null;
    image_thumbnail_url: string | null;
    name: string | string;
    permalink: string; // Link to Opensea
    seaport_sell_orders: Array<{ current_price: string }> | null;
    collection: {
        name: string;
        safelist_request_status: 'verified' | 'not_requested' | 'disabled_top_trending';
        image_url: string;
        slug: string;
    };
    token_id: string;
    animation_url: string | null;
}
