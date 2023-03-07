import { defineStyle } from '@chakra-ui/system';

export const textStyles = {
    '5xl': defineStyle({
        fontFamily: 'readexPro',
        fontSize: '3rem',
        lineHeight: 1,
        fontWeight: 400,
    }),
    '3xl': defineStyle({
        fontFamily: 'readexPro',
        fontSize: '1.875rem',
        lineHeight: '2.25rem',
        fontWeight: 400,
    }),
    body: defineStyle({
        fontFamily: 'readexPro',
        fontSize: '16px',
        lineHeight: '20px',
        fontWeight: 400,
    }),
    small: defineStyle({
        fontFamily: 'readexPro',
        fontSize: '0.875rem',
        lineHeight: '1.0625rem',
        fontWeight: 500,
    }),
};
