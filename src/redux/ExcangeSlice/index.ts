import {
  createDraftSafeSelector,
  createSlice,
} from '@reduxjs/toolkit';

const initialState = {
  excange: [],
  isLoading: true
}

export const excangeSlice = createSlice({
  name: 'excange',
  initialState,
  reducers: {
    changeLoadingState: (state) => {
      state.isLoading = !state.isLoading;
    }
  },
});

export const excangeSelectorProvider = (state: any) => state.excange;

export const makeSelectExcange = createDraftSafeSelector(
  excangeSelectorProvider,
  (subState) => subState.excange,
);

export const makeSelectIsLoading = createDraftSafeSelector(
  excangeSelectorProvider,
  (subState) => subState.isLoading,
)


// export const { } = excangeSlice.actions;
export default excangeSlice.reducer;