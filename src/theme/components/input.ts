import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/system';
import { mode } from '@chakra-ui/theme-tools';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
    inputAnatomy.keys
);

const baseStyle = definePartsStyle((props) => ({
    field: {
        height: 'space48',
        padding: 'space14',
        color: mode('text.primary.light', 'text.primary.dark')(props),
        _placeholder: {
            color: mode('text.secondary.light', 'text.secondary.dark')(props),
        },
        background: mode('search.light', 'search.dark')(props),
        borderRadius: 'radius24',
        outline: 'none',
        textStyle: 'body',
        width: '100%',

        _invalid: {
            outline: '1px solid',
            outlineOffset: '-1px',
            outlineColor: mode('error.light', 'error.dark')(props),
            color: mode('error.light', 'error.dark')(props),
        },
    },
}));

export const Input = defineMultiStyleConfig({ baseStyle });
