import { type Asset } from '@/types';
import axios from 'axios';

export const getNfts = async (address: string, cursor?: string) => {
    const params = new URLSearchParams();
    params.append('owner', address);
    params.append('limit', '20');
    params.append('include_orders', 'true');
    if (cursor) {
        params.append('cursor', cursor);
    }
    const { data } = await axios.get(`https://api.opensea.io/api/v1/assets?${params.toString()}`);
    return data as { assets: Asset[]; next: string | null; previous: string | null };
};
