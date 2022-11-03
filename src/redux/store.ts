import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import coinsSlice from './CoinsSlice';
import newsSlice from './NewsSlice';

import coinsSaga from './CoinsSlice/saga';
import coinSaga from './CoinSlice/saga';
import CoinSlice from './CoinSlice';


const sagaMiddleWare = createSagaMiddleware();

export const store = configureStore({
    reducer: {
      coins: coinsSlice,
      coin: CoinSlice,
      news: newsSlice,
    },
    middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(coinsSaga);
sagaMiddleWare.run(coinSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;