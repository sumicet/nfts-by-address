import { defineStyleConfig } from '@chakra-ui/styled-system';
import { textStyles } from '../foundations/textStyles';

export const Text = defineStyleConfig({
    baseStyle: {
        fontWeight: 'normal',
    },
    variants: textStyles,
    defaultProps: {
        variant: 'body',
    },
});
