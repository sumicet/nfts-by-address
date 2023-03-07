import { colors } from './colors';
import { textStyles } from './textStyles';
import { typography } from './typography';
import { breakpoints } from './breakpoints';
import { space } from './space';
import { sizes } from './sizes';
import { radii } from './radii';
import { shadows } from './shadows';

// https://github.com/chakra-ui/chakra-ui/tree/main/packages/theme/src/foundations

export const foundations = {
    ...typography,
    colors,
    textStyles,
    breakpoints,
    space,
    sizes,
    radii,
    shadows,
};
