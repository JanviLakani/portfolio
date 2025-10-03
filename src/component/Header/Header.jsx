import React, { useContext, useState } from "react";
import logo from "../../assets/img/portpholio-white-logo.webp";
import darkLogo from "../../assets/img/logo-dark.webp";
import { ThemeContext } from "../../context/ThemeContext";
import { TbSunHigh } from "react-icons/tb";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { RiMenu5Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";

function Header(props) {
  const theme = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  console.log("theme", theme);

  console.log("menuOpen", menuOpen);

  const navLinks = [
    { title: "Home", link: "#" },
    { title: "Project", link: "#" },
    { title: "About Me", link: "#" },
    { title: "Resume", link: "#" },
    { title: "Contact Me", link: "#" },
  ];

  // https://wp.aqlova.com/bfolio/home-dark/
  // https://codepen.io/tag/background-animation?cursor=ZD0xJm89MCZwPTk=
  // https://codepen.io/kanishkkunal/pen/MYbmzN/
  // https://preview.themeforest.net/item/zeng-personal-portfolio-wordpress-theme/full_screen_preview/59734350
  // https://slimhamdi.net/tunis/demos/dark.html
  // http://preview.themeforest.net/item/biogra-personal-portfolio-wordpress-theme/full_screen_preview/59916925

  return (
    <header className="py-6 fixed top-0 left-0 w-full z-5555 bg-white dark:bg-black text-shadow-md">
      <div className="container mx-auto flex justify-between items-center relative ">
        <div className="flex justify-between space-x-20 xl:space-x-30">
          {/* <a href="#">
            <img
              src={theme.theme === "light" ? darkLogo : logo}
              alt="logo"
              className="w-44"
            />
          </a> */}

      
          <nav>
            <ul className="hidden lg:flex justify-between space-x-7 xl:space-x-9 font-bold">
              {navLinks.map((v, i) => (
                <li key={i}>
                  <a href={v.link} className="relative group inline-block">
                    {v.title}
                    <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-orange-600 transition-all duration-400 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex justify-between items-center space-x-6 xl:space-x-7">
          {/* <div className="flex justify-between items-center gap-3"> */}
          {/* <h1  className="text-white">janvi</h1> */}

          <a href="#" onClick={() => theme.toogleTheme(theme.theme)} className="text-4xl">
            {theme.theme === "light" ? <BsFillMoonStarsFill /> : <TbSunHigh />}
          </a>

          <a
            href="#"
            className="bg-black dark:bg-white text-white  dark:text-black px-4 py-2 rounded-2xl hidden lg:inline-block hover:bg-orange-400 "
          >
            Let's Talk
          </a>
          <a
            href="#"
            className="text-2xl lg:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <RiMenu5Line />
          </a>

          {/* ====  */}
        </div>
      </div>

      <div
        className={`lg:hidden w-80 h-screen fixed top-0 right-0 bg-black transform transition-transform duration-1000  ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <a
          href="#"
          className="inline-block text-2xl bg-amber-500 font-bold"
          onClick={() => setMenuOpen(false)}
        >
          <MdClose />
        </a>

        <nav>
          <ul className="font-bold pt-4 mb-5 pl-3">
            {navLinks.map((v, i) => (
              <li key={i} className="pt-1">
                <a href={v.link}>{v.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#"
          className="bg-black dark:bg-white text-white  dark:text-black px-4 py-2 rounded-2xl mt-3 hover:bg-yellow-500 "
        >
          Let's Talk
        </a>
      </div>
    </header>
  );
}

export default Header;
