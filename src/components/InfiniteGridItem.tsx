import { Box } from '@chakra-ui/layout';
import { forwardRef } from 'react';
import { type ItemProps } from 'react-virtuoso';

/**
 * Used for the Infinite Grid.
 * Needed to set the width to 100%.
 */
export const InfiniteGridItem = forwardRef<HTMLDivElement, ItemProps<any>>((props, ref) => (
    <Box {...props} ref={ref} boxSize="100%" />
));

InfiniteGridItem.displayName = 'InfiniteGridItem';
