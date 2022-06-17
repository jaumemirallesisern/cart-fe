import { all, spawn, call } from 'redux-saga/effects';
import { watchFetchProductSaga } from './modules/products/saga';

export default function* allSagas() {
  const sagas = [
      watchFetchProductSaga
  ];

  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.error(`Error ${e}`);
          }
        }
      })
    )
  );
}
