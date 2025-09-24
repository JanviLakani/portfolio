// import Portfolio from "./component/Portfolio/Portfolio"; 
// import Home from "./container/Home/Home"; 
import { Route, Routes } from "react-router-dom";

import UserRoute from "./routes/UserRoute";
import PrivateRoute from "./routes/PrivateRoute";
import AdminRoute from "./routes/AdminRoute";
import { ThemeProvider } from "./context/ThemeContext";

function App() {



  return (
    <>
    <ThemeProvider>
      <Routes>
        <Route path="/*" element={<UserRoute />} />

        <Route element={<PrivateRoute />}>
          <Route path="/admin/*" element={<AdminRoute />} />
        </Route>
      </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
