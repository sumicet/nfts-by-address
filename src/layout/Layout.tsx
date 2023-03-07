import { Box, Center, VStack, type CenterProps } from '@chakra-ui/layout';
import { Header } from './Header';

export function Layout({ children, ...rest }: CenterProps) {
    return (
        <VStack boxSize="100%" {...rest}>
            <Header />
            <Center boxSize="100%">
                <Box boxSize="100%" maxWidth="1400px" paddingX="2rem">
                    {children}
                </Box>
            </Center>
        </VStack>
    );
}
