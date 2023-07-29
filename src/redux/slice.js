import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getAllInfo from './helper';

export const getApiData = createAsyncThunk('provinces/getData', async () => {
  try {
    const result = await getAllInfo();
    return result;
  } catch (error) {
    return error;
  }
});

const initialState = {
  provinces: [],
  isLoading: false,
  hasError: false,
};

const slice = createSlice({
  name: 'provinces',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getApiData.pending, (state) => {
        const updated = {
          ...state,
          isLoading: true,
        };
        return updated;
      })

      .addCase(getApiData.fulfilled, (state, action) => {
        const updated = {
          ...state,
          provinces: action.payload,
          isLoading: false,
        };
        return updated;
      })

      .addCase(getApiData.rejected, (state) => {
        const update = {
          ...state,
          isLoading: false,
          hasError: true,
        };
        return update;
      });
  },
});

export default slice.reducer;
