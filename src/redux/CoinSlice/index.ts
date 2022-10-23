import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

const initialState: any = {
  coins: [],
}

export const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
  },
});

export const selectCoins = ({ coins: any }) => coins;

export const { } = coinsSlice.actions;
export default coinsSlice.reducer;