import { type Asset } from '@/types';
import { Button } from '@chakra-ui/button';
import { Box, HStack, Link, Text, VStack } from '@chakra-ui/layout';
import { type ModalProps } from '@chakra-ui/modal';
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
import convert from 'ether-converter';
import { Icon } from './Icon';
import { NftImage } from './NftImage';

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

    // Bad conversion, no bueno for production
    // Should've converted to USD but was too lazy
    const lowestPrice = seaport_sell_orders?.[0].current_price
        ? (convert(seaport_sell_orders[0].current_price, 'wei', 'ether') as string)
        : '0';
    const listingCount = seaport_sell_orders?.length;

    console.log({
        isOpen,
        onClose,
        name,
        image_preview_url,
        image_thumbnail_url,
        description,
        seaport_sell_orders,
        permalink,
        collection,
        ...rest,
    });

    return (
        <Modal preserveScrollBarGap isOpen={isOpen} onClose={onClose} isCentered blockScrollOnMount>
            <ModalOverlay />
            <ModalContent maxWidth={500 + 24 * 2}>
                <ModalHeader justifyContent="flex-end" display="flex">
                    <ModalCloseButton />
                </ModalHeader>

                <ModalBody>
                    <VStack spacing="space14" alignItems="flex-start">
                        <Box borderRadius="radius16" overflow="hidden">
                            <NftImage
                                src={image_thumbnail_url}
                                fallback={collection.image_url}
                                boxSize={500}
                            />
                        </Box>
                        <Text
                            variant="subtitle"
                            color={textPrimaryColor}
                            noOfLines={2}
                            wordBreak="break-all"
                        >
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
                                    src={collection.image_url}
                                    boxSize={30}
                                    borderRadius="100%"
                                />
                                <Text
                                    variant="body"
                                    color={textSecondaryColor}
                                    noOfLines={1}
                                    wordBreak="break-all"
                                >
                                    {collection.name}
                                </Text>
                                {collection.safelist_request_status === 'verified' && (
                                    <Icon type="verified" boxSize="space16" />
                                )}
                            </HStack>
                        </Link>
                        {description && (
                            <Text
                                variant="body"
                                color={textSecondaryColor}
                                noOfLines={6}
                                wordBreak="break-all"
                            >
                                {description}
                            </Text>
                        )}

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
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
