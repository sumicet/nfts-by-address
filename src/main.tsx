import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ChakraProvider } from '@chakra-ui/provider';
import { theme } from '@/theme';
import '@fontsource/readex-pro';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from './layout';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <Layout>
                    <App />
                </Layout>
            </QueryClientProvider>
        </ChakraProvider>
    </React.StrictMode>
);
