import {takeEvery,call,put} from 'redux-saga/effects';
import actions from '../actions/index';
import actionsType from '../actions/action-types';

function fetchData() {
    return fetch('http://localhost:9000/api/pizza-products')
        .then( resp => resp.json());
}

export function* workerInitProducts() {
    const data = yield call(fetchData);
    yield put(actions.initProducts(data));
}

export function* watchInitProducts() {
    yield takeEvery(actionsType.LOAD_PRODUCTS, workerInitProducts)
}
