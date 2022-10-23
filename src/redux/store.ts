import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import coinsSlice from './CoinSlice';
import newsSlice from './NewsSlice';
import coinSaga from './CoinSlice/saga';


const sagaMiddleWare = createSagaMiddleware();

export const store = configureStore({
    reducer: {
      coins: coinsSlice,
      news: newsSlice,
    },
    middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(coinSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;