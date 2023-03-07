export interface Asset {
    id: number;
    description: string | null;
    external_link: string;
    image_thumbnail_url: string | null;
    image_original_url: string | null;
    image_preview_url: string | null;
    name: string;
    permalink: string; // Link to Opensea
    seaport_sell_orders: Array<{ current_price: string }> | null;
    collection: {
        name: string;
        safelist_request_status: 'verified' | 'not_requested' | 'disabled_top_trending';
        image_url: string;
    };
}
