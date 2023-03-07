export interface Asset {
    id: number;
    description: string | null;
    external_link: string;
    image_thumbnail_url: string;
    image_original_url: string;
    name: string;
    permalink: string; // Link to Opensea
}
