import {newReducer} from './newReducer';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk'

const reducers = combineReducers({
    newReducer: newReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store;
