import { modalAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/system';
import { mode } from '@chakra-ui/theme-tools';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
    modalAnatomy.keys
);

const baseStyle = definePartsStyle((props) => ({
    dialogContainer: {
        display: 'flex',
        alignItems: props?.isCentered ? 'center' : 'flex-start',
        justifyContent: 'center',
        // transitionDuration: 'normal',
        zIndex: 1000,
    },
    dialog: {
        width: 'fit-content',
        background: mode('background.secondary.light', 'background.secondary.dark')(props),
        borderRadius: 'radius20',
        paddingTop: 'space30',
    },
    body: {
        padding: 'space24',
    },
    header: {
        color: mode('text.primary.light', 'text.primary.dark')(props),
        paddingX: 'space24',
    },
    overlay: {
        bgColor: 'overlay',
        zIndex: 999,
    },
    closeButton: {
        color: mode('text.secondary.light', 'text.secondary.dark')(props),
    },
}));

export const Modal = defineMultiStyleConfig({ baseStyle });
