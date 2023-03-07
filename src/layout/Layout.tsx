import { Box, Center, type CenterProps } from '@chakra-ui/layout';

export function Layout({ children, ...rest }: CenterProps) {
    return (
        <Center boxSize="100%" {...rest}>
            <Box boxSize="100%" maxWidth="1400px" paddingX="2rem">
                {children}
            </Box>
        </Center>
    );
}
