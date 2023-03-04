'use client';

import { Provider } from 'react-redux';
import store from '@/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const persistor = persistStore(store);

export default function Providers({ children }: { children: React.ReactNode}) {
    return (
        <Provider store={store} >
            <PersistGate loading={null} persistor={persistor} >
                {children}
            </PersistGate>
        </Provider>
    )
}