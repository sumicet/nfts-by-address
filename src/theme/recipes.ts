import { defineStyle } from '@chakra-ui/system';

export const hideScrollbar = defineStyle({
    '&::-webkit-scrollbar': {
        display: 'none',
    },
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
});
