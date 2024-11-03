import { FaBook, FaHome, FaInfoCircle, FaUser, } from "react-icons/fa";
import { IoExit } from "react-icons/io5";
import { SignOut } from "../SignOut";
import { BsPencilSquare } from "react-icons/bs";

export const AdminMenuItems = [
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
        name:"Profilim",
        icon: <FaUser  />,
        link:"/user",
    },
      {
        name:"CreateBlog",
        icon: <BsPencilSquare  />,
        link:"/create",
    },
    {
        name:"Çıkış yap",
        icon: <IoExit  />,
        link:"/",
        onclick: <SignOut/>,

    }
]
