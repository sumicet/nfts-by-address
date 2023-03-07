import { type Asset } from '@/types';
import { HStack, Text, VStack } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/system';
import { Icon } from './Icon';
import convert from 'ether-converter';
import { NftImage } from './NftImage';

export function NftCard({
    image_thumbnail_url,
    name,
    seaport_sell_orders,
    collection,
    token_id,
}: Asset) {
    const textPrimaryColor = useColorModeValue('text.primary.light', 'text.primary.dark');
    const textSecondaryColor = useColorModeValue('text.secondary.light', 'text.secondary.dark');
    const bgColor = useColorModeValue('card.light', 'card.dark');
    const outlineColor = useColorModeValue('outline.light', 'outline.dark');

    // Bad conversion, no bueno for production
    // Should've converted to USD but was too lazy
    const lowestPrice = seaport_sell_orders?.[0].current_price
        ? (convert(seaport_sell_orders[0].current_price, 'wei', 'ether') as string)
        : '0';
    const listingCount = seaport_sell_orders?.length;

    return (
        <VStack
            spacing="space16"
            boxSize="100%"
            padding="space12"
            paddingBottom="space16"
            alignItems="flex-start"
            bgColor={bgColor}
            borderRadius="radius32"
            outline="1px solid"
            outlineOffset="-1px"
            outlineColor={outlineColor}
            position="relative"
            overflow="hidden"
            zIndex={1}
            _dark={{
                _after: {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: 'space32',
                    background: 'card.gradient.dark',
                    zIndex: -1,
                },
            }}
        >
            <NftImage
                height={320}
                width="100%"
                src={image_thumbnail_url}
                fallback={collection.image_url}
                borderRadius="radius32"
            />
            <VStack spacing="space12" alignItems="flex-start" paddingX="space8">
                <Text color={textPrimaryColor} noOfLines={1} wordBreak="break-all">
                    {name || `#${token_id}`}
                </Text>
                <HStack spacing="space4">
                    <Text color={textSecondaryColor} noOfLines={1} wordBreak="break-all">
                        {collection.name}
                    </Text>
                    {collection.safelist_request_status === 'verified' && (
                        <Icon type="verified" boxSize="space16" />
                    )}
                </HStack>
                {listingCount ? (
                    <Text color="gold" noOfLines={3} variant="small">
                        1 listing at {lowestPrice} ETH
                    </Text>
                ) : (
                    <Text
                        color={textSecondaryColor}
                        noOfLines={3}
                        wordBreak="break-all"
                        variant="small"
                    >
                        Not for sale
                    </Text>
                )}
            </VStack>
        </VStack>
    );
}
