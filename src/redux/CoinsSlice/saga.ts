import {
  call,
  put,
  takeLatest,
  throttle,
} from 'redux-saga/effects';
import request from '../../utils/request';
import {
  getCoinsApi,
  COINS_REQUEST_OPTIONS,
  SEARCH_API,
} from '../../constants';

import {
  getCoins, searchCoins
} from './constants';
import {
  getCoinsResponse,
  updateTotalCount,
} from '.';

export function* getCoinsFromApi({ payload }): any {
  try {
    const {
      limit,
      offset,
    } = payload;

    const response = yield call(request, getCoinsApi(limit, offset), COINS_REQUEST_OPTIONS);
    if (response) {
      yield put(getCoinsResponse(response));
      yield put(updateTotalCount(response?.data?.stats.total));
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
      //  TODO: put in home page
      // yield put(getCoinsResponse(response));
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