import { createDraftSafeSelector } from '@reduxjs/toolkit';
import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

const initialState = {
  coins: [],
  isLoading: true,
}

export const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    getCoins: (state) => {
      state.isLoading = true;
    },
    getCoinsResponse: (state: any, action: PayloadAction) => {
      state.coins = action.payload;
      state.isLoading = false;
    },
  },
});

export const coinsSelectorProvider = (state: any) => state.coins;

export const makeSelectCoinsSlice = createDraftSafeSelector(
  coinsSelectorProvider,
  (subState) => subState.coins,
)

export const makeSelectCoinsSliceCoins = createDraftSafeSelector(
  makeSelectCoinsSlice,
  (subState) => subState?.data?.coins,
)

export const makeSelectIsLoading = createDraftSafeSelector(
  coinsSelectorProvider,
  (subState) => subState.isLoading,
)

export const { getCoins, getCoinsResponse } = coinsSlice.actions;
export default coinsSlice.reducer;