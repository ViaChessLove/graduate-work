import {
  createDraftSafeSelector,
  createSlice,
} from '@reduxjs/toolkit';

const initialState = {
  news: [],
  isLoading: true
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    changeLoadingState: (state) => {
      state.isLoading = !state.isLoading;
    }
  },
});

export const newsSelectorProvider = (state) => state.news;

export const makeSelectNews = createDraftSafeSelector(
  newsSelectorProvider,
  (subState) => subState.news,
);

export const makeSelectIsLoading = createDraftSafeSelector(
  newsSelectorProvider,
  (subState) => subState.isLoading,
)


// export const { } = newsSlice.actions;
export default newsSlice.reducer;