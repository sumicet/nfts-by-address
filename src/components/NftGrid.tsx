import { VirtuosoGrid } from 'react-virtuoso';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getNfts } from '@/utils';
import { InfiniteGridList } from './InfiniteGridList';
import { InfiniteGridItem } from './InfiniteGridItem';
import { NftCard } from './NftCard';
import { Box, SimpleGrid, Text } from '@chakra-ui/layout';
import { type Asset } from '@/types';
import { NftCardSkeleton } from './NftCardSkeleton';

interface NftGridProps {
    onClick: (nft: Asset) => void;
    address: string | undefined;
}

export function NftGrid({ onClick, address }: NftGridProps) {
    const {
        data,
        isLoading,
        fetchStatus,
        isError,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isRefetching,
    } = useInfiniteQuery({
        queryKey: ['nfts', address],
        queryFn: async ({ pageParam }) =>
            await getNfts(address || '0xFe2E3E999bc785bb053c85688dA6DaA4a19Eb0f4', pageParam),
        // Don't fetch next query if the address doesn't start with 0x
        getNextPageParam: (lastPage) => lastPage?.next,
        enabled: !address || Boolean(address && address.length === 42 && address.startsWith('0x')),
    });

    // What a messed up bug
    // https://github.com/TanStack/query/issues/3584
    if (isLoading && fetchStatus !== 'idle')
        return (
            <SimpleGrid gap="space32" minChildWidth={280} width="100%">
                {[...Array(10)].map((_, index) => (
                    <NftCardSkeleton key={index + 1} />
                ))}
            </SimpleGrid>
        );

    if (isError)
        return (
            <Box padding="space24">
                <Text>Nfts not available at the moment. Please try again later.</Text>
            </Box>
        );

    return (
        <VirtuosoGrid
            style={{ height: '100%', width: '100%' }}
            data={data?.pages?.map((page) => page?.assets).flat()}
            useWindowScroll
            endReached={() => fetchNextPage()}
            itemContent={(index, nft) => (
                <Box
                    key={nft?.id || index}
                    boxSize="100%"
                    role="button"
                    onClick={() => nft && onClick(nft)}
                >
                    {nft ? <NftCard {...nft} /> : <NftCardSkeleton />}
                </Box>
            )}
            context={{
                isLoading: hasNextPage || isFetchingNextPage || isRefetching,
            }}
            components={{
                List: InfiniteGridList,
                Item: InfiniteGridItem,
            }}
        />
    );
}
