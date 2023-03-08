import { Box, Center, VStack, type CenterProps } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/system';
import { Footer } from './Footer';
import { Header } from './Header';

export function Layout({ children, ...rest }: CenterProps) {
    const bgColor = useColorModeValue('background.primary.light', 'background.primary.dark');
    return (
        <VStack boxSize="100%" bgColor={bgColor} {...rest}>
            <Header />
            <Center boxSize="100%">
                <Box boxSize="100%" maxWidth="container" paddingX="2rem">
                    {children}
                </Box>
            </Center>
            <Footer />
        </VStack>
    );
}
