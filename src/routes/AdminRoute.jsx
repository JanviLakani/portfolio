// import React from 'react';
// import { Route, Routes } from "react-router-dom";
// import Category from '../admin/container/Category/Category';

// function AdminRoute(props) {

//   return (

//   <Routes>
//     <Route path='/categry' element={<Category/>}/>
//   </Routes>
//   );
// }

// export default AdminRoute;

import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../admin/component/Layout/Layout";
import Category from "../admin/container/Category/Category";
import Portfolio from "../admin/container/Portfolio/Portfolio";

import { createTheme, ThemeProvider } from "@mui/material";;
import { themeSettings } from "../admin/theme";
import { ThemeContext } from "../context/ThemeContext";
// import Portfolio from "../component/Portfolio/Portfolio";

function AdminRoute(props) {
  const theme = useContext(ThemeContext);

  const muiTheme = createTheme(themeSettings(theme.theme));
  return (
    <ThemeProvider theme={muiTheme}>
      <Layout> 
        <Routes>
          <Route path="/Category" element={<Category />} />
          <Route path="/portfolio" element={<Portfolio/>}/>
           {/* <Route path="/counter" element={<Counter/>}/>  */}
        </Routes>
      </Layout> 
    </ThemeProvider>
  );
}

export default AdminRoute;
