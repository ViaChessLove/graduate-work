import {
  call,
  put,
  takeLatest,
  throttle,
} from 'redux-saga/effects';
import request from '../../utils/request';
import {
  COINS_API,
  COINS_REQUEST_OPTIONS,
  SEARCH_API,
} from '../../constants';

import {
  getCoins, searchCoins
} from './constants';
import { getCoinsResponse } from '.';

export function* getCoinsFromApi(): any {
  try {
    const response = yield call(request, COINS_API, COINS_REQUEST_OPTIONS);
    if (response) {
      yield put(getCoinsResponse(response))
    }
  } catch(e) {
    console.warn('coins request error:', e);
  }
}

export function* searchCoinsFromApi({ payload }): any {
  try {
    const options = {
      ...COINS_REQUEST_OPTIONS,
    };

    const response = yield call(request, `${SEARCH_API}?query=${payload}&limit=50`, options);

    if (response) {
      yield put(getCoinsResponse(response));
    }

    yield;
  } catch(e) {
    console.warn('search err', e);
  }
}

export default function*  coinsSaga() {
  yield takeLatest(getCoins, getCoinsFromApi);
  yield takeLatest(searchCoins, searchCoinsFromApi);
}