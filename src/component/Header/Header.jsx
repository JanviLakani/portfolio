import React, { useContext } from "react";
import logo from "../../assets/img/portpholio-white-logo.webp";
import { ThemeContext } from "../../context/ThemeContext";
import { MdSunny } from "react-icons/md";
import { GoMoon } from "react-icons/go";

function Header(props) {
  const theme = useContext(ThemeContext);
  console.log("theme", theme);

  console.log("");

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
        <div className="flex justify-between space-x-40">
          <a href="">
            <img src={logo} alt="logo-img" />
          </a>

          <nav>
            <ul className="flex justify-between space-x-9 font-bold">
              {navLinks.map((v, i) => (
                <li key={i}>
                  <a href={v.link}>{v.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <div className="flex justify-between items-center space-x-7">
            {/* <h1  className="text-white">janvi</h1> */}

            <a href="#" onClick={() => theme.toogleTheme(theme.theme)}>
              {theme.theme === "light" ? <GoMoon /> : <MdSunny />}
            </a>

            <a href="#" className="bg-white text-black px-4 py-2 rounded-2xl ">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
