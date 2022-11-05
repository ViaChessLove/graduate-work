import {
  createSlice,
  PayloadAction,
  createDraftSafeSelector,
} from '@reduxjs/toolkit';
import { CoinStateType } from '../../types';

const initialState: CoinStateType = {
  coin: null,
  isLoading: false,
  uuid: '',
}

export const coinSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {
    setUuid: (state: CoinStateType, action: PayloadAction<string>) => {
      state.uuid = action.payload;
    },
    getCoin: (state: CoinStateType) => { //eslint-disable-line
      state.isLoading = true;
    },
    getCoinResponse: (state: CoinStateType, action: PayloadAction) => { //eslint-disable-line
      state.coin = action.payload;
      state.isLoading = false;
    },
    resetCoin: (state: CoinStateType) => {
      state.coin = null;
      state.isLoading = false;
      state.uuid = '';
    },
  },
});

export const coinSelectorProvider = (state: CoinStateType) => state.coin;

export const makeSelectUuid = createDraftSafeSelector(
  coinSelectorProvider,
  (subState) => subState.uuid, 
)

export const makeSelectCoin = createDraftSafeSelector(
  coinSelectorProvider,
  (subState) => subState.coin,
)

export const makeSelectCoinData = createDraftSafeSelector(
  coinSelectorProvider,
  (subState) => subState.coin?.data?.coin,
)

export const makeSelectIsLoading = createDraftSafeSelector(
  coinSelectorProvider,
  (subState) => subState.isLoading,
)

export const {
  getCoin,
  getCoinResponse,
  setUuid,
  resetCoin,
} = coinSlice.actions;
export default coinSlice.reducer;