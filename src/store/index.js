import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../redux/reducers/rootReducer';

export const middleware = [thunk];

const persistConfig = {
    key: 'persist-config',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const initState = {};

export const store = createStore(
    persistedReducer,
    initState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);
