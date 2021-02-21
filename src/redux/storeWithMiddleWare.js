import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/index";
import createSagaMiddleware from 'redux-saga';
import {watchInitProducts} from './middleware/initProducts';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watchInitProducts);
