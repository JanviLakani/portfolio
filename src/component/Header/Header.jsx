import React, { useContext } from "react";
import { MdSunny } from "react-icons/md";
import { GoMoon } from "react-icons/go";
import { ThemeContext } from "../../context/ThemeContext";

function Header(props) {
  const theme = useContext(ThemeContext);

  return (
   <div>
     
    <a href="#" onClick={() => theme.toogleTheme(theme.theme)}>
      {theme.theme === "light" ? <GoMoon /> : <MdSunny />}
    </a>
    <h1 className="bg-white text-black-700 dark:bg-black dark:text-white">headr</h1>
   </div>
  );
}

export default Header;
