import type { HTMLChakraProps } from '@chakra-ui/system';
import { chakra } from '@chakra-ui/system';
import { useRef } from 'react';

export interface VideoProps extends HTMLChakraProps<'video'> {}

const getVideoExtension = (src: string | undefined) => {
    const extension = src?.split('.').pop();
    if (!extension) return null;

    return `video/${extensionToType[extension]}`;
};

const extensionToType: Record<string, string> = {
    mov: 'mp4',
    mp4: 'mp4',
    webm: 'webm',
    wav: 'mp4',
    ogg: 'ogg',
};

export function Video({ src, ...rest }: VideoProps) {
    const ref = useRef<HTMLVideoElement | null>(null);

    return (
        <chakra.video ref={ref} loop muted playsInline preload="auto" autoPlay {...rest}>
            <source src={src} type={getVideoExtension(src) || 'video/mp4'} />
        </chakra.video>
    );
}
