import { VirtuosoGrid } from 'react-virtuoso';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getNfts } from '@/utils';
import { InfiniteGridList } from './InfiniteGridList';
import { InfiniteGridItem } from './InfiniteGridItem';
import { NftCard } from './NftCard';
import { Box, SimpleGrid, Text, VStack } from '@chakra-ui/layout';
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
        getNextPageParam: (lastPage) => lastPage?.next || undefined,
        enabled: !address || Boolean(address && address.length === 42 && address.startsWith('0x')),
        staleTime: 1000 * 60 * 60, // 1 hour
    });

    // What a messed up bug
    // https://github.com/TanStack/query/issues/3584
    if (isLoading && fetchStatus !== 'idle') {
        return (
            <SimpleGrid gap="space32" columns={{ base: 1, smd: 2, lg: 3, xl: 4 }} width="100%">
                {[...Array(15)].map((_, index) => (
                    <NftCardSkeleton key={index + 1} />
                ))}
            </SimpleGrid>
        );
    }

    if (isError) {
        return (
            <Box padding="space24">
                <Text>NFTs not available at the moment. Please try again later.</Text>
            </Box>
        );
    }
    const assets = data?.pages?.map((page) => page?.assets).flat();

    if (!assets?.length) {
        return (
            <VStack padding="space24">
                <Text variant="body">This user doesn&apos;t have any NFTs.</Text>
            </VStack>
        );
    }

    return (
        <VirtuosoGrid
            style={{ height: '100%', width: '100%' }}
            data={assets}
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
            overscan={30}
        />
    );
}

NftGrid.displayName = 'NftGrid';
