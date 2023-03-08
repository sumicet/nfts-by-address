import { SimpleGrid } from '@chakra-ui/layout';
import { forwardRef } from 'react';
import { type ListProps } from 'react-virtuoso';

export const InfiniteGridList = forwardRef<HTMLDivElement, ListProps>((props, ref) => {
    return (
        <SimpleGrid
            {...props}
            ref={ref}
            gap="space32"
            columns={{ base: 1, smd: 2, lg: 3, xl: 4 }}
            width="100%"
            alignItems="flex-start"
        />
    );
});

InfiniteGridList.displayName = 'InfiniteGridList';
