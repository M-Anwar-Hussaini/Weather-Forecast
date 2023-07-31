import { configureStore } from '@reduxjs/toolkit';
import provinceReducer from './slice';

const store = configureStore({
  reducer: {
    provinces: provinceReducer,
  },
});

export default store;
