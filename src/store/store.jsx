import { configureStore } from '@reduxjs/toolkit'
import slideReducer from "../Components/Slices/BlogSlice"
// import blogReducer from "../Components/Slices/BlogSlice"
// import menuReducer from "../Components/Slices/BlogSlice"
// import blogDataReducer from "../Components/Slices/BlogSlice"

export const store = configureStore({
  reducer: {
    slide: slideReducer,
    // blog: blogReducer,
    // menuItems: menuReducer,
    // blogData: blogDataReducer,
  },
})
