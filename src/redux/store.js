import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root_reducer'

const middlewares = [logger]

// const store = createStore(rootReducer,applyMiddleware(...middlewares))

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;