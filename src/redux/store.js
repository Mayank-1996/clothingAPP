import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import persistStore from 'redux-persist/es/persistStore';

import rootReducer from './root_reducer'



const middlewares = [logger]

// const store = createStore(rootReducer,applyMiddleware(...middlewares))

export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const persistor = persistStore(store);