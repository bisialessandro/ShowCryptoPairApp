/**
 * Created by abisi on 2019-06-27
 */
import { createStore, applyMiddleware } from 'redux';
import { persistCombineReducers } from 'redux-persist'
import {AsyncStorage} from 'react-native'
import thunk from 'redux-thunk';
import {rootReducer} from './root-reducer';
import {CONFIG_REDUX_PERSIST} from "../config/config.redux.persist";
import {isDevEnvironment} from "../config/config.app";

const persistConfig = {
    key: CONFIG_REDUX_PERSIST.REDUX_CACHE_KEY,
    storage: AsyncStorage,
    //blacklist: CONFIG_REDUX_PERSIST.BLACKLIST,
    whitelist: CONFIG_REDUX_PERSIST.WHITELIST,
};

const persistedReducer = persistCombineReducers(persistConfig, rootReducer);

let middleware = [thunk];

if (isDevEnvironment()) {
    const {logger} = require(`redux-logger`);
    middleware = [...middleware, logger];
}

const store = createStore(persistedReducer, undefined, applyMiddleware(...middleware));
export default store;