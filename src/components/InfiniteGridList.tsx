import { SimpleGrid } from '@chakra-ui/layout';
import { forwardRef } from 'react';
import { type ListProps } from 'react-virtuoso';

/**
 * Used for the Infinite Grid.
 */
export const InfiniteGridList = forwardRef<HTMLDivElement, ListProps>((props, ref) => {
    return (
        <SimpleGrid
            {...props}
            ref={ref}
            gap="space32"
            minChildWidth={250}
            width="100%"
            alignItems="flex-start"
        />
    );
});

InfiniteGridList.displayName = 'InfiniteGridList';
