import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
// import storage from 'redux-persist/lib/storage';
// import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
const createNoopStorage = () => {
   return {
      getItem(_key: any) {
         return Promise.resolve(null);
      },
      setItem(_key: any, value: any) {
         return Promise.resolve(value);
      },
      removeItem(_key: any) {
         return Promise.resolve();
      },
   };
};
const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

// reducer
import cart from './cartSlice';

const reducers = combineReducers({
    cart,
});

const config = {
    key: "root",
    storage,
    // storage: AsyncStorage
};

const reducer = persistReducer(config, reducers);

const store = configureStore({
    reducer: reducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

export default store
