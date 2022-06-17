import { takeLatest, put, all, delay, call } from 'redux-saga/effects';
import {
  FETCH_PRODUCTSLIST_REQUEST,
  FETCH_PRODUCTSLIST_SUCCESS,
  FETCH_PRODUCTSLIST_FAILURE
} from './actions';
import { fetchProductsList } from '../../../services/cartApi';

export interface Product {
  id: number;
  name: string;
  customerPrice: number;
  cost : number;
}

// Extremely simple saga that's here just as an example
export function* fetchProductsListSaga() {
  console.log(`saga`);
  try {
    yield delay(1000);
    console.log(`saga1`);
    const response : Array<Product> = yield call(fetchProductsList);
    console.log(response);
    yield put({ type : FETCH_PRODUCTSLIST_SUCCESS, data : response });
    console.log('Succeeded fetching products list');
  } catch (e) {
    console.log(e);
    yield put({ type : FETCH_PRODUCTSLIST_FAILURE, error : e });
    console.log('Failed fetching products list');
  }
}

export function* watchFetchProductSaga() {
  yield all([
    takeLatest([ FETCH_PRODUCTSLIST_REQUEST ], fetchProductsListSaga),
  ]);
}

/*export function* incSaga() {
  console.log(`saga-inc`);
  try {
    yield put({ type : INCREMENT_COUNTER });
    console.log('Succeeded inc cart');
  } catch (e) {
    console.log(e);
    console.log('Failed dec cart');
  }
}

export function* watchIncrementSaga() {
  yield all([
    takeLatest([ INCREMENT_COUNTER ], incSaga),
  ]);
}

export function* decSaga() {
  console.log(`saga-dec`);
  try {
    yield put({ type : DECREMENT_COUNTER });
    console.log('Succeeded dec cart');
  } catch (e) {
    console.log(e);
    console.log('Failed dec cart');
  }
}

export function* watchDecrementSaga() {
  yield all([
    takeLatest([ DECREMENT_COUNTER ], decSaga),
  ]);
}*/

/*export function* showCartSaga() {
  console.log(`saga-show-cart`);
  try {
    yield put({ type : SHOW_CART });
    console.log('Succeeded show cart');
  } catch (e) {
    console.log(e);
    console.log('Failed show chart');
  }
}

export function* watchShowCartSaga() {
  yield all([
    takeLatest([ SHOW_CART ], showCartSaga),
  ]);
}*/
