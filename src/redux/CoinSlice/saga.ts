import {
  call,
  put,
  select,
  takeEvery,
} from 'redux-saga/effects';
import { COINS_REQUEST_OPTIONS} from '../../constants';
import { formatCoinRequest } from '../../utils/helpers';
import request from "../../utils/request";
import { getCoin } from "./constants";
import {
  getCoinResponse,
  makeSelectUuid,
} from './index';

function* getCoinFromApi(): Generator {
  try {
    const uuid: unknown = yield select(makeSelectUuid);
    const response = yield call(request, formatCoinRequest(uuid), COINS_REQUEST_OPTIONS);

    if (response) {
      yield put(getCoinResponse(response));
    }
  } catch(e) {
    console.warn('coin request error: ', e)
  }
}

export default function* coinSaga() {
  yield takeEvery(getCoin, getCoinFromApi);
}