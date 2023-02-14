import {
  PayloadAction,
  createDraftSafeSelector,
  createSlice,
} from '@reduxjs/toolkit';

interface ExchangeProps {
  exchange: any[],
  isLoading: boolean,
}

const initialState: ExchangeProps = {
  exchange: [],
  isLoading: false,
}

export const exchangeSlice = createSlice({
  name: 'exchange',
  initialState,
  reducers: {
    changeLoadingState: (state) => {
      state.isLoading = !state.isLoading;
    },
    exchangesRequest: (state) => {
      state.isLoading = true;
    },
    exchangesSuccess: (state, payload: PayloadAction<any>) => {
      state.exchange = payload;
      state.isLoading = false;
    },
    resetExchanges: (state) => {
      state.exchange = [];
      state.isLoading = false;
    },
  },
});

export const exchangeSelectorProvider = (state: ExchangeProps) => state.exchange;

export const makeSelectExchange = createDraftSafeSelector(
  exchangeSelectorProvider,
  (subState) => subState.exchange,
);

export const makeSelectIsLoading = createDraftSafeSelector(
  exchangeSelectorProvider,
  (subState) => subState.isLoading,
);

export const makeSelectExchangeData = createDraftSafeSelector(
  exchangeSelectorProvider,
  (subState) => subState.exchange?.payload?.data.exchanges,
)

export const {
  changeLoadingState,
  exchangesRequest,
  exchangesSuccess,
  resetExchanges,
} = exchangeSlice.actions;
export default exchangeSlice.reducer;