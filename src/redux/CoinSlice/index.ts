import {
  createSlice,
  PayloadAction,
  createDraftSafeSelector,
} from '@reduxjs/toolkit';
import { CoinStateType } from '../../types';
import { COLORS } from '../../constants';

const initialState: CoinStateType = {
  coin: null,
  isLoading: false,
  uuid: '',
  data: null,
  comparableCoin: null,
  selectCoins: null,
}

export const coinSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {
    setUuid: (state: CoinStateType, { payload }: PayloadAction<string>) => {
      state.uuid = payload;
    },
    getCoin: (state: CoinStateType) => { // eslint-disable-line
      state.isLoading = true;
    },
    getCoinResponse: (state: CoinStateType, { payload }: PayloadAction) => { // eslint-disable-line
      state.coin = payload;
      state.isLoading = false;
    },
    updateData: (state: CoinStateType, { payload }: PayloadAction<any>) => {
      state.data = payload;
    },
    updateDataSets: (state: CoinStateType, { payload }: PayloadAction<any>) => {
      if (state.data?.datasets.length > 1) {
        state.data?.datasets.pop();
      }
      
      const compareDataset = {
        label: payload?.symbol,
        data: payload?.sparkline.map((spark: string) => Number(spark)),
        borderColor: COLORS.poisonousIceCream,
        backgroundColor: COLORS.poisonousIceCream,
      };

      state.data?.datasets.push(compareDataset);
    },
    resetCoin: (state: CoinStateType) => {
      state.coin = null;
      state.isLoading = false;
      state.uuid = '';
      state.data = null;
      state.comparableCoin = null;
      state.selectCoins = null;
    },
    updateInitialGraphColor: (state: CoinStateType, { payload }: PayloadAction<any>) => {
      state.data.datasets.borderColor = payload;
      state.data.datasets.backgroundColor = payload;
    },
    updateCompareCoin: (state: CoinStateType, { payload }: PayloadAction<string>) => {
      state.isLoading = true;
    },
    updateCompareCoinResponse: (state: CoinStateType, { payload }: PayloadAction<any>) => {
      state.comparableCoin = payload;
    },
    updateIsLoading: (state: CoinStateType) => {
      state.isLoading = !state.isLoading;
    },
    updateSelectCoins: (state: CoinStateType, { payload }: PayloadAction<any>) => {
      state.selectCoins = payload;
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

export const makeSelectComparableCoinData = createDraftSafeSelector(
  coinSelectorProvider,
  (subState) => subState.comparableCoin?.data?.coin,
);

export const makeSelectSelectCoins = createDraftSafeSelector(
  coinSelectorProvider,
  (subState) => subState.selectCoins?.data?.coins,
)

export const {
  getCoin,
  getCoinResponse,
  setUuid,
  resetCoin,
  updateData,
  updateDataSets,
  updateInitialGraphColor,
  updateCompareCoin,
  updateCompareCoinResponse,
  updateIsLoading,
  updateSelectCoins,
} = coinSlice.actions;
export default coinSlice.reducer;