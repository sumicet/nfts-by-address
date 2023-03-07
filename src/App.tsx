import { VStack, Text, Box } from '@chakra-ui/layout';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getNfts } from '@/utils';
import { Input } from '@chakra-ui/input';
import { VirtuosoGrid } from 'react-virtuoso';
import { InfiniteGridItem, InfiniteGridList, NftCard } from '@/components';

function App() {
    const [address, setAddress] = useState<string>();
    const [selectedNft, setSelectedNft] = useState<any>(null);

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
        queryFn: async () => await getNfts(address || '0xFe2E3E999bc785bb053c85688dA6DaA4a19Eb0f4'),
        // Don't fetch next query if the address doesn't start with 0x
        getNextPageParam: (lastPage) => lastPage?.next,
        enabled: !address || Boolean(address && address.length === 42 && address.startsWith('0x')),
    });

    // What a messed up bug
    // https://github.com/TanStack/query/issues/3584
    if (isLoading && fetchStatus !== 'idle') return <div>Loading...</div>;

    if (isError) return <div>Error...</div>;

    console.log(data?.pages?.[0]?.assets);

    return (
        <VStack width="100%" spacing="space40">
            <Text variant="3xl">Discover Wallet-Owned NFTs</Text>
            <Input
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                placeholder="0xFe2E3E999bc785bb053c85688dA6DaA4a19Eb0f4"
            />
            <VirtuosoGrid
                style={{ height: '100%', width: '100%' }}
                data={data?.pages?.map((page) => page?.assets).flat()}
                useWindowScroll
                overscan={0}
                endReached={() => fetchNextPage()}
                itemContent={(_, nft) => (
                    <Box
                        key={nft.id}
                        boxSize="100%"
                        role="button"
                        onClick={() => {
                            setSelectedNft(nft);
                            window.open(nft.permalink, '_blank');
                        }}
                    >
                        <NftCard {...nft} />
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
        </VStack>
    );
}

export default App;
