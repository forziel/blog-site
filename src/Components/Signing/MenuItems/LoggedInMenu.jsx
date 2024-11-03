import { FaBook, FaHome, FaInfoCircle, FaUser } from "react-icons/fa";
import { IoExit } from "react-icons/io5";
import { SignOut } from "../SignOut";


export const LoggedInMenu = [
  {
    name: "Anasayfa",
    icon: <FaHome  />,
    link: "/",
  },
  {
    name: "Bloglar",
    icon: <FaBook  />,
    link: "/blogs",
  },
  {
    name: "Hakkımda",
    icon: <FaInfoCircle  />,
    link: "/info",
  },
  {
    name: "Profilim",
    icon: <FaUser  />,
    link: "/user",
  },
  {
    name: "Çıkış yap",
    icon: <IoExit  />,
    link: "/",
    onclick: <SignOut/>,
  },
];


