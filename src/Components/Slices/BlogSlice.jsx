import { createSlice } from '@reduxjs/toolkit'
import { BlogData } from '../BlogData'
import { SignOutMenu } from '../Signing/MenuItems/SignOutMenu';

const initialState = {
  slides: BlogData,
  blog: BlogData[0],
  menuItems: SignOutMenu,
  blogData:BlogData,

}

export const counterSlice = createSlice({
  name: 'slides',
  initialState,
  reducers: {
    setSlides: (state, action)=>{
        state.slides = [action.payload , ...state.slides  ]
    },
    setBlog: (state, action) => {
      state.blog = action.payload
    },
    setMenuItems: (state, action) => {
      state.menuItems = action.payload
      localStorage.setItem('menuItems', JSON.stringify(state.menuItems));
    },
    setBlogData: (state, action) => {
      state.blogData = [action.payload, ...state.blogData];
    }
  },
})


export const {setSlides, setBlog, setMenuItems,setBlogData} = counterSlice.actions

export default counterSlice.reducer