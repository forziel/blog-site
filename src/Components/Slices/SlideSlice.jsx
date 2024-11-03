import { createSlice } from '@reduxjs/toolkit';
import { BlogData } from '../BlogData';

const initialState = {
  slides: BlogData,
};

const slideSlice = createSlice({
  name: 'slides',
  initialState,
  reducers: {
    setSlides: (state, action) => {
      state.slides = [action.payload, ...state.slides];
    },
  },
});

export const { setSlides } = slideSlice.actions;

export default slideSlice.reducer;