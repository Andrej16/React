import { configureStore } from '@reduxjs/toolkit';
import hidenComponentReducer from '../HidenComponent/hidenComponentSlice'

export const store = configureStore({
  reducer: {
    hidenComponent: hidenComponentReducer,
  },
});