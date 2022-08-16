import { configureStore } from '@reduxjs/toolkit';
import hidenComponentReducer from '../components/HidenComponent/hidenComponentSlice'

export const store = configureStore({
  reducer: {
    hidenComponent: hidenComponentReducer,
  },
});