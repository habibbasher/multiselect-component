import { all, call, takeLatest, put } from 'redux-saga/effects';

import { fetchLocationSuccess, fetchLocationFailure } from './location.actions';
import { LocationActionTypes } from './location.types';

import { callAPI } from '../../lib/callApi';

export function* fetchLocation({ payload }: any) {
  try {
    const result = yield callAPI(
      'GET',
      `/search/query3?query=${payload}`,
      null
    );
    yield put(fetchLocationSuccess({ locations: result.results.slice(0, 5) }));
  } catch (error) {
    yield put(fetchLocationFailure(error));
  }
}

export function* onFetchLocationStart() {
  yield takeLatest(LocationActionTypes.FETCH_LOCATION_START, fetchLocation);
}

export function* locationSagas() {
  yield all([call(onFetchLocationStart)]);
}
