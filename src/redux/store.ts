import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import coinsSlice from './CoinsSlice';
import coinSlice from './CoinSlice';
import excangeSlice from './ExcangeSlice';

import coinsSaga from './CoinsSlice/saga';
import coinSaga from './CoinSlice/saga';


const sagaMiddleWare = createSagaMiddleware();

export const store = configureStore({
    reducer: {
      coins: coinsSlice,
      coin: coinSlice,
      excange: excangeSlice,
    },
    middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(coinsSaga);
sagaMiddleWare.run(coinSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;