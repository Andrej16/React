import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    enabled: true
};

export const hidenComponentSlice = createSlice({
    name: 'hidenComponent',
    initialState,
    reducers: {
        updateVisibility: (state) => {
            state.enabled = !state.enabled;
        }
    }
});

export const { updateVisibility } = hidenComponentSlice.actions;

export const selectEnabled = (state) => state.hidenComponent.enabled;

export default hidenComponentSlice.reducer;