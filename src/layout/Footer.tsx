import { Image } from '@chakra-ui/image';
import { HStack, Text } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/system';

export function Footer() {
    const textSecondaryColor = useColorModeValue('text.secondary.light', 'text.secondary.dark');
    return (
        <HStack justifyContent="space-between" height="header" width="100%" paddingX="space30">
            <Image src="https://i.imgur.com/4bhODnH.png" boxSize="space40" />
            <Text variant="body" color={textSecondaryColor}>
                Footer
            </Text>
        </HStack>
    );
}
