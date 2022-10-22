import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

const initialState: any = {
  coins: [],
}

export const coinsSlice = createSlice({
  name: 'COINS_SLICE',
  initialState,
  reducers: {
  },
});

export const { } = coinsSlice.actions;
export default coinsSlice.reducer;