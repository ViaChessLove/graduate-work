import {
  createDraftSafeSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

const initialState: any = {
  news: [],
  isLoading: true
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    changeLoadingState: (state: any, action: PayloadAction) => {
      state.isLoading = !state.isLoading;
    }
  },
});

export const newsSelectorProvider = (state: any) => state.news;

export const makeSelectNews = createDraftSafeSelector(
  newsSelectorProvider,
  (subState) => subState.news,
);

export const makeSelectIsLoading = createDraftSafeSelector(
  newsSelectorProvider,
  (subState) => subState.isLoading,
)


export const { } = newsSlice.actions;
export default newsSlice.reducer;