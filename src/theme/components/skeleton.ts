import { defineStyleConfig } from '@chakra-ui/system';
import { cssVar, mode } from '@chakra-ui/theme-tools';

const $startColor = cssVar('skeleton-start-color');
const $endColor = cssVar('skeleton-end-color');

export const Skeleton = defineStyleConfig({
    baseStyle: (props) => ({
        [$startColor.variable]: mode(
            'colors.background.secondary.light',
            'colors.background.secondary.dark'
        )(props),
        [$endColor.variable]: mode('colors.skeleton.light', 'colors.skeleton.dark')(props),
        opacity: 0.7,
        borderRadius: '2px',
        borderColor: 'red',
        background: 'purple',
    }),
});
