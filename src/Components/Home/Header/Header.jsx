import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


import Menu from "./Menu";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";

const Header = () => {
  const [modal, setModal] = useState(false);
  const toggleMenu = () => {
    setModal(!modal);
  };

  return (
    <nav
      className="fixed top-0 w-full z-20 bg-light-secondary dark:bg-dark-secondary transition-all shadow-md flex justify-between items-center px-24 py-3"
      style={{ height: "11vh" }}
    >
      <Link to={"/"}>
        <div className="font-semibold text-xl font-serif">
          <i>İlayda'nın Bloğu</i>
        </div>
      </Link>
      <div className="flex gap-32 items-center">
        <div className="flex gap-6 items-center">
          <a href="https://www.instagram.com/dailyydaaa_/">
            <FaInstagram size={"2rem"} cursor={"pointer"} />
          </a>
          <FaGithub  size={"2rem"} cursor={"pointer"} />
          <FaYoutube size={"2rem"} cursor={"pointer"} />
        </div>
        <DarkMode/>
        <div>
          <CiMenuBurger onClick={toggleMenu} size={"2rem"} cursor={"pointer"} />
          <Drawer open={modal} onClose={toggleMenu} anchor="right">
            <Menu toggleMenu={toggleMenu}/>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default Header;
