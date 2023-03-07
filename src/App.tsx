import { VStack, Text } from '@chakra-ui/layout';
import { Layout } from './layout';

function App() {
    return (
        <Layout>
            <VStack width="100%">
                <Text variant="5xl" color="text.secondary.dark">
                    Hello there
                </Text>
                <Text variant="3xl">Hello there</Text>
                <Text>Hello there</Text>
            </VStack>
        </Layout>
    );
}

export default App;
