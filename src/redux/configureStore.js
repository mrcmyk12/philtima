import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Notes} from './notes';
import {Shopping} from './shopping';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            notes: Notes,
            shopping: Shopping
        }),
        applyMiddleware(thunk,logger)
    );

    return store;
}

