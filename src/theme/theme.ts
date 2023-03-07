import type { ThemeConfig } from '@chakra-ui/theme';
import { components } from './components';
import { foundations } from './foundations';

const config: ThemeConfig = {
    useSystemColorMode: true,
    initialColorMode: 'dark',
    cssVarPrefix: 'nfts-by-address',
};

export const theme = {
    components,
    ...foundations,
    config,
};
