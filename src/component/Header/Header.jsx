import React, { useContext, useState } from "react";
import logo from "../../assets/img/portpholio-white-logo.webp";
import darkLogo from "../../assets/img/logo-dark.webp";
import { ThemeContext } from "../../context/ThemeContext";
import { MdSunny } from "react-icons/md";
import { GoMoon } from "react-icons/go";
import { RiMenu5Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";

function Header(props) {
  const theme = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  console.log("theme", theme);

  console.log("menuOpen", menuOpen);

  const navLinks = [
    { title: "Home", link: "#" },
    { title: "About", link: "#" },
    { title: "Project", link: "#" },
    { title: "Tecnologi", link: "#" },
    { title: "Contact", link: "#" },
  ];

  // https://wp.aqlova.com/bfolio/home-dark/

  return (
    <header className="py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex justify-between space-x-20 xl:space-x-30">
          <a href="" className="text-2xl">
            {/* <img src={logo} alt="logo-img" /> */}
            <img src={theme.theme === "light" ? darkLogo : logo} alt="logo" />
          </a>

          <nav>
            <ul className="hidden lg:flex justify-between space-x-7 xl:space-x-9 font-bold">
              {navLinks.map((v, i) => (
                <li key={i}>
                  <a href={v.link}>{v.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex justify-between items-center space-x-6 xl:space-x-7">
        {/* <div className="flex justify-between items-center gap-3"> */}
          {/* <h1  className="text-white">janvi</h1> */}

          <a href="#" onClick={() => theme.toogleTheme(theme.theme)}>
            {theme.theme === "light" ? <GoMoon /> : <MdSunny />}
          </a>

          <a
            href="#"
            className="bg-black dark:bg-white text-white  dark:text-black px-4 py-2 rounded-2xl hidden lg:inline-block"
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
        } ` }
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
          className="bg-black dark:bg-white text-white  dark:text-black px-4 py-2 rounded-2xl mt-3"
        >
          Let's Talk
        </a>
      </div>
    </header>
  );
}

export default Header;
