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

import { createTheme, ThemeProvider } from "@mui/material";;
import { themeSettings } from "../admin/theme";
import { ThemeContext } from "../context/ThemeContext";

function AdminRoute(props) {
  const theme = useContext(ThemeContext);

  const muiTheme = createTheme(themeSettings(theme.theme));
  return (
    <ThemeProvider theme={muiTheme}>
      <Layout> 
        <Routes>
          <Route path="/categry" element={<Category />} />
        </Routes>
      </Layout> 
    </ThemeProvider>
  );
}

export default AdminRoute;
