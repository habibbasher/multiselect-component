import { all, call } from 'redux-saga/effects';

import { locationSagas } from './location/location.sagas';

export default function* rootSaga() {
  yield all([call(locationSagas)]);
}
