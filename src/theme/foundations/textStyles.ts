import { defineStyle } from '@chakra-ui/system';

export const textStyles = {
    title: defineStyle({
        fontFamily: 'readexPro',
        fontSize: '3rem',
        lineHeight: 1,
        fontWeight: 400,
    }),
    subtitle: defineStyle({
        fontFamily: 'readexPro',
        fontSize: '1.5rem',
        lineHeight: '2rem',
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
