import { configureStore } from '@reduxjs/toolkit';
import provinceReducer from './slice';

const store = configureStore({
  reducer: {
    provinces: provinceReducer,
  },
});

export async function printData() {
  const res = await fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=kabul&appid=e7e6928cc5d52c53ee37d5011f6f8f82&units=metric',
  );
  const data = await res.json();
  return { ...data };
}

export default store;
