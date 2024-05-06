import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import ThemeProvider from './app/common/context/theme/theme';
import { ContextProviderComposer } from './app/common/context/provider-composer/provider-composer';
import { DataProvider } from './app/common/context/data/provider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';

const client = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <StrictMode>
        <QueryClientProvider client={client}>
            <ContextProviderComposer
                contexts={[
                    <ThemeProvider children={undefined} />,
                    <DataProvider children={undefined} />,
                ]}
            >
                <App />
                <ReactQueryDevtools />
            </ContextProviderComposer>
        </QueryClientProvider>
    </StrictMode>
);
