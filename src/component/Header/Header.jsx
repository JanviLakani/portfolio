import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { TbSunHigh } from "react-icons/tb";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { RiMenu5Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const theme = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { title: "Home", link: "/#home" },
    { title: "Project", link: "/project" },
    { title: "About Me", link: "/about" },
    { title: "Resume", link: "/resume" },
    { title: "Contact Me", link: "/contact" },
  ];

  // fixed top-0 left-0 w-full z-50
  return (
    <header className="py-6 fixed top-0 left-0 w-full bg-white dark:bg-black shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center relative">
       
        <div className="flex justify-between space-x-20 xl:space-x-30">
          <div className="flex items-center space-x-3">
            <img
              src="/public/img/business_woman.jpeg"
              alt="imgg"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2 className="font-bold text-gray-800">Janvi</h2>
              <p className="text-green-500 text-xs font-semibold">
                React Developer
              </p>
            </div>
          </div>

         
          <nav>
            <ul className="hidden lg:flex justify-between space-x-7 xl:space-x-9 font-bold">
              {navLinks.map((v, i) => (
                <li key={i}>
                  <NavLink
                    to={v.link}
                    className="group relative inline-block hover:text-gray-600 transition-colors duration-300"
                  >
                    {v.title}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

      
        <div className="flex justify-between items-center space-x-6 xl:space-x-7">
          <button
            onClick={() => theme.toogleTheme(theme.theme)}
            className="text-4xl"
          >
            {theme.theme === "light" ? <BsFillMoonStarsFill /> : <TbSunHigh />}
          </button>

          <NavLink
            to="/#contact"
            className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-2xl hidden lg:inline-block hover:bg-green-400"
          >
            Let's Talk
          </NavLink>

          <button
            className="text-2xl lg:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <RiMenu5Line />
          </button>
        </div>
      </div>

     
      <div
        className={`lg:hidden w-80 h-screen fixed top-0 right-0 bg-black transform transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <button
          className="inline-block text-2xl bg-amber-500 font-bold m-2 p-1"
          onClick={() => setMenuOpen(false)}
        >
          <MdClose />
        </button>

        <nav>
          <ul className="font-bold pt-4 mb-5 pl-3 space-y-2">
            {navLinks.map((v, i) => (
              <li key={i}>
                <NavLink
                  to={v.link}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-700 rounded"
                >
                  {v.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <NavLink
          to="/#contact"
          onClick={() => setMenuOpen(false)}
          className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-2xl mt-3 ml-3 hover:bg-yellow-500 inline-block"
        >
          Let's Talk
        </NavLink>
      </div>
    </header>
  );
}

export default Header;






// https://slimhamdi.net/tunis/demos/dark.html 
// https://slimhamdi.net/moscow/demos/index-dark.html
// https://preview.themeforest.net/item/xfolio-personal-portfolio-cv-resume-html-template/full_screen_preview/59912051























// https://wp.aqlova.com/bfolio/home-dark/
// https://codepen.io/tag/background-animation?cursor=ZD0xJm89MCZwPTk=
// https://codepen.io/kanishkkunal/pen/MYbmzN/
// https://preview.themeforest.net/item/zeng-personal-portfolio-wordpress-theme/full_screen_preview/59734350
// https://slimhamdi.net/tunis/demos/dark.html
// http://preview.themeforest.net/item/biogra-personal-portfolio-wordpress-theme/full_screen_preview/59916925
// https://preview.themeforest.net/item/zeng-personal-portfolio-wordpress-theme/full_screen_preview/59734350
// https://codepen.io/SudipTech/pen/GLvOOZ
