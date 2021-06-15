import { createStore , applyMiddleware } from "redux";
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { fetchCollections } from "./shop/shop-sagas";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [ sagaMiddleware , logger ];

export const store = createStore( rootReducer , applyMiddleware( ...middlewares ) )

 sagaMiddleware.run(rootSaga)

export const persistor = persistStore( store )

