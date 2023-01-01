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
  data: null,
}

export const coinSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {
    setUuid: (state: CoinStateType, { payload }: PayloadAction<string>) => {
      state.uuid = payload;
    },
    getCoin: (state: CoinStateType) => { //eslint-disable-line
      state.isLoading = true;
    },
    getCoinResponse: (state: CoinStateType, { payload }: PayloadAction) => { //eslint-disable-line
      state.coin = payload;
      state.isLoading = false;
    },
    updateData: (state: CoinStateType, { payload }: PayloadAction<any>) => {
      state.data = payload;
    },
    updateDataSets: (state: CoinStateType, { payload }: PayloadAction<any>) => {
      state.data?.datasets.push(payload);
    },
    resetCoin: (state: CoinStateType) => {
      state.coin = null;
      state.isLoading = false;
      state.uuid = '';
      state.data = null;
    },
    updateInitialGraphColor: (state:CoinStateType, { payload }: PayloadAction<any>) => {
      state.data.datasets.borderColor = payload;
      state.data.datasets.backgroundColor = payload;
    }
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

export const makeSelectChartData = createDraftSafeSelector(
  coinSelectorProvider,
  (subState) => subState.data,
);

export const {
  getCoin,
  getCoinResponse,
  setUuid,
  resetCoin,
  updateData,
  updateDataSets,
  updateInitialGraphColor,
} = coinSlice.actions;
export default coinSlice.reducer;