import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

const initialState: any = {
  coins: [],
}

export const newsSlice = createSlice({
  name: 'NEWS_SLICE',
  initialState,
  reducers: {
  },
});

export const { } = newsSlice.actions;
export default newsSlice.reducer;