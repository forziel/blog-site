import { FaBook, FaHome, FaInfoCircle, FaUserCircle } from "react-icons/fa";

export const SignOutMenu =[
    {
        name: "Anasayfa",
        icon: <FaHome />,
        link: "/",
      },
      {
        name: "Bloglar",
        icon: <FaBook />,
        link: "/blogs",
      },
      {
        name: "Hakkımda",
        icon: <FaInfoCircle />,
        link: "/info",
      },
      {
        name: "Giriş yap / Kayıt Ol",
        icon: <FaUserCircle />,
        link: "/login",
      },
]