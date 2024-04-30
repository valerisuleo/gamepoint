import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './app/common/context/theme/theme';
import { ContextProviderComposer } from './app/common/context/provider-composer/provider-composer';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <ContextProviderComposer
            contexts={[<ThemeProvider children={undefined} />]}
        >
            <App />
        </ContextProviderComposer>
    </BrowserRouter>
);
