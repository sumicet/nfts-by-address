import { VStack, Text } from '@chakra-ui/layout';
import { useState } from 'react';
import { Input } from '@chakra-ui/input';
import { NftGrid, NftModal } from '@/components';
import { useDisclosure } from '@chakra-ui/hooks';
import { type Asset } from './types';

function App() {
    const [address, setAddress] = useState<string>();
    const [value, setValue] = useState<string>();
    const [selectedNft, setSelectedNft] = useState<Asset>();
    const { isOpen, onClose, onOpen } = useDisclosure();

    return (
        <>
            {selectedNft && <NftModal {...selectedNft} isOpen={isOpen} onClose={onClose} />}
            <VStack width="100%" spacing="space40">
                <Text variant={{ base: 'subtitle', md: 'title' }} textAlign="center">
                    Wallet-Owned NFTs At Your Sausage Fingertips
                </Text>
                <Input
                    value={value}
                    onChange={(event) => {
                        const value = event.target.value;
                        setValue(value);

                        // TODO: Would be good to debounce here
                        if (!value || (value?.startsWith('0x') && value?.length === 42)) {
                            setAddress(value);
                        }
                    }}
                    placeholder="Wallet address, eg. 0xFe2E3E999bc785bb053c85688dA6DaA4a19Eb0f4"
                />
                <NftGrid
                    onClick={(nft) => {
                        setSelectedNft(nft);
                        onOpen();
                    }}
                    address={address}
                />
            </VStack>
        </>
    );
}

export default App;
