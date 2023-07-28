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
    builder.addCase(getApiData.fulfilled, (state, action) => {
      state.provinces = action.payload;
    });
  },
});

export default slice.reducer;
