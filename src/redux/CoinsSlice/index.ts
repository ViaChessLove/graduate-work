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
    sortCoinsByRank: (state: CoinsStateType) => {
      state.coins.data.coins = state.coins.data.coins.sort((a, b) => a?.rank - b?.rank);
    },
    sortCoinsByRankFromLower: (state: CoinsStateType) => {
      state.coins.data.coins = state.coins.data.coins.sort((a, b) => b?.rank - a?.rank);
    },
    sortCoinsByChange: (state: CoinsStateType) => {
      state.coins.data.coins = state.coins.data.coins.sort((a, b) => (
        parseInt(b?.change, 10) - parseInt(a?.change, 10)
      ));
    },
    sortCoinsByChangeFromLower: (state: CoinsStateType) => {
      state.coins.data.coins = state.coins.data.coins.sort((a, b) => (
        parseInt(a?.change, 10) - parseInt(b?.change, 10)
      ));
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

export const {
  getCoins,
  getCoinsResponse,
  sortCoinsByChange,
  sortCoinsByChangeFromLower,
  sortCoinsByRank,
  sortCoinsByRankFromLower,
} = coinsSlice.actions;
export default coinsSlice.reducer;