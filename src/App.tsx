import { VStack, Text, Box } from '@chakra-ui/layout';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getNfts } from '@/utils';
import { Input } from '@chakra-ui/input';
import { Virtuoso } from 'react-virtuoso';

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
        queryFn: async () => await getNfts(address || '0xDaF288Eea1a696Ecb1DD37a1e6b2A4058a604e7C'),
        // Don't fetch next query if the address doesn't start with 0x
        getNextPageParam: (lastPage) => lastPage?.next,
        enabled: !address || Boolean(address && address.length === 42 && address.startsWith('0x')),
    });

    // What a messed up bug
    // https://github.com/TanStack/query/issues/3584
    if (isLoading && fetchStatus !== 'idle') return <div>Loading...</div>;

    if (isError) return <div>Error...</div>;

    console.log(data);

    return (
        <VStack width="100%">
            <Text variant="3xl">Explore the NFTs owned by a wallet</Text>
            <Input
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                placeholder="0xDaF288Eea1a696Ecb1DD37a1e6b2A4058a604e7C"
            />
            <Virtuoso
                style={{ height: '100%', width: '100%' }}
                data={data?.pages?.map((page) => page?.assets).flat()}
                useWindowScroll
                overscan={0}
                endReached={() => fetchNextPage()}
                itemContent={(_, nft) => (
                    <Box
                        key={nft.id}
                        width="100%"
                        role="button"
                        onClick={() => setSelectedNft(nft)}
                    >
                        {/* <JobCard {...job} /> */}
                    </Box>
                )}
                context={{
                    isLoading: hasNextPage || isFetchingNextPage || isRefetching,
                }}
                components={
                    {
                        // List: InfiniteGridList,
                        // Item: InfiniteGridItem,
                        // Footer: InfiniteGridFooter,
                    }
                }
            />
        </VStack>
    );
}

export default App;
