import {
  call,
  put,
  select,
  takeEvery,
} from 'redux-saga/effects';
import {
  COINS_REQUEST_OPTIONS,
  COLORS,
} from '../../constants';
import { formatCoinRequest } from '../../utils/helpers';
import request from "../../utils/request";
import { getCoin } from "./constants";
import { makeSelectCoinData } from './index';
import {
  getCoinResponse,
  makeSelectUuid,
  updateData,
} from './index';

function* getCoinFromApi(): Generator {
  try {
    const uuid: unknown = yield select(makeSelectUuid);

    const options ={
      ...COINS_REQUEST_OPTIONS,
    }

    const response = yield call(request, formatCoinRequest(uuid), options);

    if (response) {
      yield put(getCoinResponse(response));

      const coin = yield select(makeSelectCoinData);
      
      const labels = coin?.sparkline.map((spark: string, sparkIndex: number) => `${sparkIndex}h`);
      
      yield put(updateData({
        labels,
        datasets: [{
          label: coin?.symbol,
          data: coin?.sparkline.map((spark: string) => Number(spark)),
          borderColor: COLORS.bioticGrasp,
          backgroundColor: COLORS.bioticGrasp,
        }],
      }));
    }
  } catch(e) {
    console.warn('coin request error: ', e)
  }
}

export default function* coinSaga() {
  yield takeEvery(getCoin, getCoinFromApi);
}