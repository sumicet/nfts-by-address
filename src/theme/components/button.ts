import { defineStyleConfig } from '@chakra-ui/styled-system';
import { textStyles } from '../foundations/textStyles';

export const Button = defineStyleConfig({
    baseStyle: {
        height: 'button',
        paddingX: 'space14',
        fontSize: '1rem',
        lineHeight: '1rem',
        fontFamily: 'readexPro',
        fontWeight: 400,
    },
});
