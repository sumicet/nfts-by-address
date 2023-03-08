import type { ImageProps as ChakraImageProps } from '@chakra-ui/image';
import { Image as ChakraImage } from '@chakra-ui/image';

const fallbackSrc = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';

export type ImageProps = ChakraImageProps;

/**
 * Wraps Chakra's Image component. Adds a fallback.
 */
export function Image({ src, ...rest }: ImageProps) {
    return <ChakraImage src={src || fallbackSrc} {...rest} />;
}
