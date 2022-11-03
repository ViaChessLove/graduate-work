import { call, put, select, takeLatest } from "redux-saga/effects";
import { COINS_REQUEST_OPTIONS } from "../../constants";
import { formatCoinRequest } from "../../utils/helpers";
import request from "../../utils/request";
import { getCoin } from "./constants";
import { coinUuidSelector, getCoinResponse } from './index';

function* getCoinFromApi() {
  try {
    const uuid: string = yield select(coinUuidSelector);
    const response: any = yield call(request, formatCoinRequest(uuid), COINS_REQUEST_OPTIONS)
    if (response) {
      yield put(getCoinResponse(response));
    }
  } catch(e) {
    console.warn('coin request error: ', e)
  }
}

export default function* coinSaga() {
  yield takeLatest(getCoin, getCoinFromApi);
}