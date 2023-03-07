export interface Asset {
    id: number;
    description: string | null;
    external_link: string;
    image_thumbnail_url: string;
    image_original_url: string;
    name: string;
    permalink: string; // Link to Opensea
    seaport_sell_orders: Array<{ current_price: string }> | null;
    collection: {
        name: string;
        safelist_request_status: 'verified' | 'not_requested' | 'disabled_top_trending';
    };
}
