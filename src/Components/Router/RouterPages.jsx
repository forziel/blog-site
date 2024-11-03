//Route components
import { Routes, Route } from "react-router-dom";
import InfoWrapper from "../Info/InfoWrapper";
import Blogs from "../Blogs/Blogs";
import Blog from "../Blogs/Blog";
import ResetPassword from "../Signing/ResetPassword";
import Giriş from "../Signing/Giriş";
import Kaydol from "../Signing/Kaydol";
import Home from "../Home/Home"
import UserWrapper from "../User/UserWrapper";
import CreateBlogWrapper from "../CreateBlog/CreateBlogWrapper";


const RouterPages = () => {
  return (
    <div>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/info"
            element={<InfoWrapper />}
          />
          <Route
            path="/blogs"
            element={<Blogs />}
          />
          <Route
            path="/blog"
            element={<Blog />}
          />
          <Route
            path="/sign-in"
            element={<Kaydol/>}
          />
          <Route
            path="/login"
            element={<Giriş/>}
          />
          <Route
            path="/resetPassword"
            element={<ResetPassword/>}
          />
          <Route
            path="/profile"
            element={<ResetPassword/>}
          />
          <Route
            path="/create"
            element={<CreateBlogWrapper/>}
          />
          <Route
            path="/user"
            element={<UserWrapper/>}
          />
        </Routes>
    </div>
  )
}

export default RouterPages
