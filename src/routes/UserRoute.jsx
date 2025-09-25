import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../container/Home/Home";
import Header from "../component/Header/Header";
import { ThemeContext } from "../context/ThemeContext";

function UserRoute(props) {

  const theme = useContext(ThemeContext);
  return (
    <div className={`${theme.theme} font-lato bg-red-500 ` }>
      <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/" element={<Header/>} />  */}


    </Routes>
    </div>
  );
}

export default UserRoute;
