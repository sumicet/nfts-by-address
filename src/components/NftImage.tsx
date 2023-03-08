import { Box, type BoxProps, Center, Text, VStack } from '@chakra-ui/layout';
import { Image } from './Image';
import placeholder from '@/assets/images/placeholder.png';

export function NftImage({
    src,
    fallback,
    ...rest
}: { src: string | null; fallback: string | null } & BoxProps) {
    if (src) {
        return <Image src={src} objectFit="cover" {...rest} />;
    }

    return (
        <Box position="relative" overflow="hidden" {...rest}>
            <Image
                src={fallback || placeholder}
                borderRadius="radius16"
                objectFit="cover"
                boxSize="100%"
                filter="blur(30px)"
            />
            <Center position="absolute" top={0} boxSize="100%" left={0}>
                <VStack bgColor="overlay" padding="space14" borderRadius="radius16">
                    <Image
                        src={fallback || placeholder}
                        boxSize={50}
                        borderRadius="100%"
                        objectFit="cover"
                    />
                    <Text color="white">Content not available yet.</Text>
                </VStack>
            </Center>
        </Box>
    );
}

NftImage.displayName = 'NftImage';
