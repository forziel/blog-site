import { useState } from "react";
import { FaSun } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";

const DarkMode = () => {
  const [theme, setTheme] = useState(document.documentElement.classList.value);
  
  const themeHandler = () => {
    if (theme == "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div>
      <button>
        {theme !== "dark" ? (
          <FaSun
            onClick={themeHandler}
            size={"2.5rem"}
            cursor={"pointer"}
            className=" rounded-full opacity-100 transition duration-500 active:opacity-0 "
          />
        ) : (
          <MdDarkMode
            className=" rounded-full opacity-100 transition-all duration-500 active:opacity-0"
            onClick={themeHandler}
            size={"2.5rem"}
            cursor={"pointer"}
          />
        )}
      </button>
    </div>
  );
};

export default DarkMode;
