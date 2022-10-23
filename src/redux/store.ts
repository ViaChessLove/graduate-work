import { configureStore } from '@reduxjs/toolkit';
import coinsSlice from './CoinSlice';
import newsSlice from './NewsSlice';

export const store = configureStore({
    reducer: {
      coins: coinsSlice,
      news: newsSlice,
    }
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;