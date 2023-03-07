import { type Asset } from '@/types';
import { Button } from '@chakra-ui/button';
import { AspectRatio, Box, HStack, Link, Text, VStack } from '@chakra-ui/layout';
import { ModalFooter, type ModalProps } from '@chakra-ui/modal';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/modal';
import { useColorModeValue } from '@chakra-ui/system';
import { Image } from './Image';
import { Icon } from './Icon';
import { NftImage } from './NftImage';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { hideScrollbar } from '@/theme';
import placeholder from '@/assets/images/placeholder.png';
import { weiToEth } from '@/utils';

interface NftModalProps extends Pick<ModalProps, 'isOpen' | 'onClose'>, Asset {}

export function NftModal({
    isOpen,
    onClose,
    name,
    image_preview_url,
    image_thumbnail_url,
    description,
    seaport_sell_orders,
    permalink,
    collection,
    token_id,
    ...rest
}: NftModalProps) {
    const textPrimaryColor = useColorModeValue('text.primary.light', 'text.primary.dark');
    const textSecondaryColor = useColorModeValue('text.secondary.light', 'text.secondary.dark');
    const outlineColor = useColorModeValue('outline.light', 'outline.dark');
    const backgroundPrimaryColor = useColorModeValue(
        'background.primary.light',
        'background.primary.dark'
    );

    const lowestPrice = weiToEth(seaport_sell_orders?.[0].current_price);
    const listingCount = seaport_sell_orders?.length;

    const preserveScrollBarGap = useBreakpointValue({ base: false, sm: true }, { ssr: false });

    return (
        <Modal
            preserveScrollBarGap={preserveScrollBarGap} // This prop doesn't seem to be responsive
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            blockScrollOnMount
            size={{ base: 'fullscreen', sm: '500' }}
        >
            <ModalOverlay />
            <ModalContent
                display="flex"
                maxHeight={{ base: '100%', sm: '70vh' }}
                sx={hideScrollbar}
                overflowY="scroll"
                // position="relative"
            >
                <ModalHeader justifyContent="flex-end" display="flex" position="sticky" top={0}>
                    <ModalCloseButton />
                </ModalHeader>

                <ModalBody flex={1}>
                    <VStack spacing="space14" alignItems="flex-start" boxSize="100%">
                        <Box width="100%">
                            <AspectRatio
                                ratio={1}
                                minWidth="100%"
                                borderRadius="radius16"
                                overflow="hidden"
                            >
                                <NftImage
                                    src={image_thumbnail_url}
                                    fallback={collection.image_url}
                                />
                            </AspectRatio>
                        </Box>
                        <Text variant="subtitle" color={textPrimaryColor}>
                            {name || `#${token_id}`}
                        </Text>
                        <Link href={`https://opensea.io/collection/${collection.slug}`} isExternal>
                            <HStack
                                outline="1px solid"
                                outlineOffset="-1px"
                                outlineColor={outlineColor}
                                _hover={{
                                    bgColor: backgroundPrimaryColor,
                                }}
                                padding="space12"
                                borderRadius="radius16"
                            >
                                <Image
                                    src={collection.image_url || placeholder}
                                    boxSize={30}
                                    borderRadius="100%"
                                />
                                <Text variant="body" color={textSecondaryColor}>
                                    {collection.name}
                                </Text>
                                {collection.safelist_request_status === 'verified' && (
                                    <Icon type="verified" boxSize="space16" />
                                )}
                            </HStack>
                        </Link>
                        {description && (
                            <Text variant="body" color={textSecondaryColor}>
                                {description}
                            </Text>
                        )}
                    </VStack>
                </ModalBody>
                <ModalFooter height="fit-content" position="sticky" bottom={0}>
                    <HStack width="100%" justifyContent="flex-end" spacing="space24">
                        {listingCount && (
                            <Text variant="body" color="gold">
                                {lowestPrice} ETH
                            </Text>
                        )}
                        <Link href={permalink} isExternal>
                            {listingCount ? (
                                <Button>Buy on Opensea</Button>
                            ) : (
                                <Button>View on Opensea</Button>
                            )}
                        </Link>
                    </HStack>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
