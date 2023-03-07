import type { IconProps as ChakraIconProps } from '@chakra-ui/icon';
import { Verified } from './icons';

export interface IconProps extends ChakraIconProps {
    type: keyof typeof icons;
}

const icons = {
    verified: Verified,
};

export function Icon(props: IconProps) {
    const { type, ...other } = props;
    const Component = icons[type];

    return <Component height="auto" width="auto" {...other} />;
}
