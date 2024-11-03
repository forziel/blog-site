import { createSlice } from '@reduxjs/toolkit';
import { SignOutMenu } from '../Signing/MenuItems/SignOutMenu';

const initialState = {
  menuItems: SignOutMenu,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenuItems: (state, action) => {
      state.menuItems = action.payload;
      localStorage.setItem('menuItems', JSON.stringify(state.menuItems));
    },
  },
});

export const { setMenuItems } = menuSlice.actions;

export default menuSlice.reducer;