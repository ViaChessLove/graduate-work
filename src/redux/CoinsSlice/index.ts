import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { CoinsStateType } from '../../types';
import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

const initialState: CoinsStateType = {
  coins: [],
  isLoading: true,
}

export const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    getCoins: (state: CoinsStateType) => {
      state.isLoading = true;
    },
    getCoinsResponse: (state: CoinsStateType, action: PayloadAction) => {
      state.coins = action.payload;
      state.isLoading = false;
    },
  },
});

export const coinsSelectorProvider = (state: CoinsStateType) => state.coins;

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