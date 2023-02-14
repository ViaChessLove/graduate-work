import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import coinsSlice from './CoinsSlice';
import coinSlice from './CoinSlice';
import exchangeSlice from './ExchangeSlice';

import coinsSaga from './CoinsSlice/saga';
import coinSaga from './CoinSlice/saga';
import exchangesSaga from './ExchangeSlice/saga';


const sagaMiddleWare = createSagaMiddleware();

export const store = configureStore({
    reducer: {
      coins: coinsSlice,
      coin: coinSlice,
      exchange: exchangeSlice,
    },
    middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(coinsSaga);
sagaMiddleWare.run(coinSaga);
sagaMiddleWare.run(exchangesSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;