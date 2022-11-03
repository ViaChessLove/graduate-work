import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  coin: null,
  isLoading: true,
  uuid: '',
}

export const coinSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {
    getCoin: (state: any, action: PayloadAction<string>) => { //eslint-disable-line
      state.uuid = action.payload;
      state.isLoading = true;
    },
    getCoinResponse: (state: any, action: PayloadAction) => { //eslint-disable-line
      state.coin = action.payload;
      state.isLoading = false;
    }
  },
});

export const coinUuidSelector = (state: any): string | null => state.uuid;
export const coinLoadingIndicatorSelector = (state: any) => state.isLoading;
export const coinSelectorProvider = (state: any) => state.coin;

export const { getCoin, getCoinResponse} = coinSlice.actions;
export default coinSlice.reducer;