import { Box } from '@chakra-ui/layout';
import { forwardRef } from 'react';
import { type GridItemProps } from 'react-virtuoso';

/**
 * Used for the Infinite Grid.
 * Needed to set the width to 100%.
 */
export const InfiniteGridItem = forwardRef<HTMLDivElement, GridItemProps>((props, ref) => (
    <Box {...props} ref={ref} boxSize="100%" />
));

InfiniteGridItem.displayName = 'InfiniteGridItem';
