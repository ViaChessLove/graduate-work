import {
  call,
  put,
  select,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import request from '../../utils/request';
import {
  makeSelectTotalCount,
  getCoins as getCoinsAction,
  makeSelectCurrentPage,
  makeSelectSearchParams,
} from './index';
import {
  getCoinsApi,
  COINS_REQUEST_OPTIONS,
  SEARCH_API,
} from '../../constants';

import {
  getCoins,
  paginateTo,
  searchCoins
} from './constants';
import {
  getCoinsResponse,
  updateCurrentPage,
  updateTotalCount,
} from '.';

export function* getCoinsFromApi({ payload }: any): any {
  try {
    const {
      limit,
      offset,
    } = payload;

    const search = yield select(makeSelectSearchParams);

    const response = yield call(request, getCoinsApi(limit, offset, search), COINS_REQUEST_OPTIONS);
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

    const currentPage = yield select(makeSelectCurrentPage);

    const offset = (currentPage - 1) * 10;

    const response = yield call(request, getCoinsApi(10, offset, payload), options);

    if (response) {
      yield put(getCoinsResponse(response));
      yield put(updateTotalCount(response?.data?.stats.total));
    }

    yield;
  } catch(e) {
    console.warn('search err', e);
  }
}

function* updatePage({ payload }) {
  try {
    const pageIntValue = parseInt(payload, 10);
    yield put(updateCurrentPage(pageIntValue));

    const total: number = yield select(makeSelectTotalCount);

    const localLimit = 10;

    const limit = total < localLimit
      ? total
      : localLimit;
    const offset = (pageIntValue - 1)*10;

    yield put(getCoinsAction({
      limit,
      offset,
    }));

  } catch (e) {
    console.warn('err', e);
  }
}

export default function*  coinsSaga() {
  yield takeLatest(getCoins, getCoinsFromApi);
  yield takeLatest(searchCoins, searchCoinsFromApi);
  yield takeEvery(paginateTo, updatePage);
}