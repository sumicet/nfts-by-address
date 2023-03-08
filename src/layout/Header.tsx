import { Image } from '@chakra-ui/image';
import { HStack } from '@chakra-ui/layout';
import { useColorMode, useColorModeValue } from '@chakra-ui/system';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    const shadow = useColorModeValue('logo.light', 'logo.dark');

    return (
        <HStack justifyContent="space-between" height="header" width="100%" paddingX="space30">
            <Image
                src="https://i.imgur.com/riyzh0s.gif"
                boxSize="space40"
                borderRadius="radius4"
                boxShadow={shadow}
            />
            <DarkModeSwitch
                checked={colorMode === 'light'}
                onChange={toggleColorMode}
                sunColor="white"
                moonColor="black"
                size={25}
            />
        </HStack>
    );
}
