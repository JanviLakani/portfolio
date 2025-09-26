import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../container/Home/Home";
import Header from "../component/Header/Header";
import { ThemeContext } from "../context/ThemeContext";

function UserRoute(props) {

  const theme = useContext(ThemeContext);
  return (
    // <div className={`${theme.theme} font-lato bg-[var(--primary-color)] text-black dark:bg-[var(--dark-primary-color)] dark:text-white` }>
    <div className={`${theme.theme} font-lato bg-[var(--primary-color)] text-black dark:bg-[var(--dark-primary-color)] dark:text-white` }>
      <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/" element={<Header/>} />  */}


    </Routes>
    </div>
  );
}

export default UserRoute;
