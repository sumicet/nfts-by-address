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
        maxWidth: 500,
    },
    body: {
        paddingX: 'space24',
    },
    header: {
        paddingTop: 'space30',
        paddingBottom: 'space24',
        color: mode('text.primary.light', 'text.primary.dark')(props),
        paddingX: 'space24',
        background: mode('background.secondary.light', 'background.secondary.dark')(props),
        zIndex: 1,
    },
    overlay: {
        bgColor: 'overlay',
        zIndex: 999,
    },
    closeButton: {
        color: mode('text.secondary.light', 'text.secondary.dark')(props),
    },
    footer: {
        width: '100%',
        padding: 'space24',
        background: mode('background.secondary.light', 'background.secondary.dark')(props),
    },
}));

export const Modal = defineMultiStyleConfig({
    baseStyle,
    sizes: {
        fullscreen: {
            dialog: {
                width: '100%',
                height: '100%',
                borderRadius: 0,
                maxWidth: '100%',
                maxHeight: '100vh',
            },
        },
        500: {
            dialog: {
                width: 500,
            },
        },
    },
});
