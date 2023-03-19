import { COINS_REQUEST_OPTIONS } from '@/constants';
import { call, put, takeEvery } from "redux-saga/effects";
import { changeLoadingState, exchangesSuccess } from './index';
import { exchangesRequest } from "./types";
import { EXCHANGE_API } from '@/constants';
import request from "@/utils/request";

function* getExchanges() {
  try {
    const res = yield call(request, EXCHANGE_API, COINS_REQUEST_OPTIONS);
    if (res) {
      yield put(exchangesSuccess(res));
    }
  } catch (e) {
    yield put(changeLoadingState());
  }
}


export default function* exchangesSaga() {
  yield takeEvery(exchangesRequest, getExchanges);
}
