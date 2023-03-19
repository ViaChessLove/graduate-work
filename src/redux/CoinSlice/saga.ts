import {
  call,
  put,
  select,
  takeEvery,
} from 'redux-saga/effects';
import {
  COINS_API,
  COINS_REQUEST_OPTIONS,
  COLORS,
} from '@/constants';
import { formatCoinRequest } from '@/utils/helpers';
import request from "@/utils/request";
import {
  makeSelectComparableCoinData,
  updateDataSets,
  updateIsLoading,
  updateSelectCoins,
} from './index';
import {
  getCoin,
  updateCompareCoin,
  updateTimePeriod,
} from './constants';
import {
  makeSelectCoinData,
  updateCompareCoinResponse,
} from './index';
import {
  getCoinResponse,
  makeSelectUuid,
  updateData,
} from './index';

function* updateCoins() {
  try {
    const options = {
      ...COINS_REQUEST_OPTIONS,
    };

    const response = yield call(request, COINS_API, options);

    if (response) {
      yield put(updateSelectCoins(response));
    }
  } catch (e) {
    console.warn(e);
  }
}

function* getCoinFromApi(): Generator {
  try {
    const uuid: unknown = yield select(makeSelectUuid);

    const options = {
      ...COINS_REQUEST_OPTIONS,
    }

    yield updateCoins();

    const response = yield call(request, formatCoinRequest(uuid), options);

    if (response) {
      yield put(getCoinResponse(response));

      const coin = yield select(makeSelectCoinData);
      
      const labels = coin?.sparkline
        .map((spark: string, sparkIndex: number) => `${sparkIndex}h`);
      
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

function* compareCoin({ payload }): Generator {
  try {
    const options = {
      ...COINS_REQUEST_OPTIONS,
    };

    const response = yield call(request, formatCoinRequest(payload), options);

    if (response) {
      yield put(updateCompareCoinResponse(response));

      const compareCoin = yield select(makeSelectComparableCoinData);

      yield put(updateDataSets(compareCoin));

      yield put(updateIsLoading());
    }
  } catch (e) {
    console.warn('compare error: ', e)
  }
}

function* updateCoinWithNewTimePeriod({ payload }) {
  try {
    const uuid: unknown = yield select(makeSelectUuid);

    const options = {
      ...COINS_REQUEST_OPTIONS,
    }

    yield updateCoins();

    const response = yield call(request, formatCoinRequest(uuid, payload), options);

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
  } catch (e) {
    console.warn(e);
  }
}

export default function* coinSaga() {
  yield takeEvery(getCoin, getCoinFromApi);
  yield takeEvery(updateCompareCoin, compareCoin);
  yield takeEvery(updateTimePeriod, updateCoinWithNewTimePeriod);
}