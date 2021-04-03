import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import clientAxios from '../client/request';
import serverAxios from '../server/request';
import {reducer as headerReducer} from '../components/Header/store'

const reducer = combineReducers({
    header: headerReducer,
});

export const getStore = (req: any) => {
    return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios(req))));
};

export const getClientStore = () => {
    // @ts-ignore
    const defaultState = window.context.state;
    return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)));
};
