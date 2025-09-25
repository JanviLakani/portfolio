import React from "react";
import logo from "../../assets/img/portpholio-white-logo.webp";

function Header(props) {
  // const theme = useContext(ThemeContext);

  const navLinks = [
    { title: "Home", link: "#" },
    { title: "About", link: "#" },
    { title: "Project", link: "#" },
    { title: "Tecnologi", link: "#" },
    { title: "Contact", link: "#" },
  ];

  // https://wp.aqlova.com/bfolio/home-dark/

  return (
    <header>
      <div className="container mx-auto flex justify-center items-center space-x">
        {/* <p className="text-4xl font-black">heloo</p>   */}

        <div className="flex justify-center items-center space-x-4">
          <a href="">
            <img src={logo} alt="logo-img" />
          </a>
          
          <nav>
            <ul>
              {navLinks.map((v, i) => (
                <li key={i}>
                  <a href={v.link}>{v.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;


