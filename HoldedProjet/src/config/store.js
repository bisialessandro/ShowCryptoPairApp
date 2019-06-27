/**
 * Created by abisi on 2019-06-27
 */
import thunk from 'redux-thunk';
import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers,
} from 'redux';

import { rootReducer } from '../state/root-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers(rootReducer),
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
