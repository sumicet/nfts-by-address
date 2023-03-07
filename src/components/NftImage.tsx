import { Box, type BoxProps, Center, Text, VStack } from '@chakra-ui/layout';
import { Image } from './Image';

export function NftImage({
    src,
    fallback,
    ...rest
}: { src: string | null; fallback: string } & BoxProps) {
    if (src) {
        return <Image src={src} objectFit="cover" {...rest} />;
    }

    // TODO handle no fallback :(

    return (
        <Box position="relative" overflow="hidden" {...rest}>
            <Image
                src={fallback}
                borderRadius="radius16"
                objectFit="cover"
                boxSize="100%"
                filter="blur(30px)"
            />
            <Center position="absolute" top={0} boxSize="100%" left={0}>
                <VStack bgColor="overlay" padding="space14" borderRadius="radius16">
                    <Image src={fallback} boxSize={50} borderRadius="100%" />
                    <Text color="white">Content not available yet.</Text>
                </VStack>
            </Center>
        </Box>
    );
}
