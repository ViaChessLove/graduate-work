import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { CoinsStateType } from '../../types';
import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

const initialState: CoinsStateType = {
  coins: [],
  isLoading: true,
  searchParams: '',
  totalCount: 0,
  currentPage: 1,
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
    resetCoinsSlice: (state: CoinsStateType, { payload }: PayloadAction) => {
      state.coins = null;
      state.isLoading = true;
      state.searchParams = '';
      state.totalCount = 0;
      state.currentPage = 1;
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
    searchCoins: (state: CoinsStateType, { payload }: PayloadAction<string>) => {
      state.searchParams = payload;
    },
    updateTotalCount: (state: CoinsStateType, { payload }: PayloadAction<number>) => {
      state.totalCount = payload;
    },
    updateCurrentPage: (state: CoinsStateType, { payload }: PayloadAction<number>) => {
      state.currentPage = payload;
    },
    paginateTo: (state: CoinsStateType, { payload }: PayloadAction<number>) => {
      state.isLoading = true;
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

export const makeSelectSearchParams = createDraftSafeSelector(
  coinsSelectorProvider,
  (subState) => subState.searchParams,
)

export const makeSelectTotalCount = createDraftSafeSelector(
  coinsSelectorProvider,
  (subState) => subState.totalCount,
)

export const makeSelectCurrentPage = createDraftSafeSelector(
  coinsSelectorProvider,
  (subState) => subState.currentPage,
)

export const {
  getCoins,
  getCoinsResponse,
  sortCoinsByChange,
  sortCoinsByChangeFromLower,
  sortCoinsByRank,
  sortCoinsByRankFromLower,
  searchCoins,
  resetCoinsSlice,
  updateTotalCount,
  updateCurrentPage,
  paginateTo,
} = coinsSlice.actions;
export default coinsSlice.reducer;