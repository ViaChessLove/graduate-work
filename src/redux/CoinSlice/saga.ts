import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import request from '../../utils/request';
import {
  COINS_API,
  COINS_REQUEST_OPTIONS,
} from '../../constants';

import {
  getCoins
} from './constants';
import { getCoinsResponse } from '.';

export function* getCoinsFromApi() {
  try {
    const response = yield call(request, COINS_API, COINS_REQUEST_OPTIONS);
    if (response) {
      yield put(getCoinsResponse(response))
    }
  } catch(e) {
    console.warn('coins request error:', e);
  }
}

export default function*  coinSaga() {
  yield takeLatest(getCoins, getCoinsFromApi);
}