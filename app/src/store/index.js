import { createStore, applyMiddleware, compose } from 'redux';
import { GET_PROFILE, TOKEN } from '../constant';
import rootReducer from './rootReducer';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './rootSaga'

const composeEnhancers = typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ?
    window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({}) : compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

const token = JSON.parse(localStorage.getItem(TOKEN))
if (token) {
    store.dispatch({ type: GET_PROFILE })
}

export default store;