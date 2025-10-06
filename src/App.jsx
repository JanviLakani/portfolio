// import Portfolio from "./component/Portfolio/Portfolio"; 
// import Home from "./container/Home/Home"; 
import { Route, Routes } from "react-router-dom";

import UserRoute from "./routes/UserRoute";
import PrivateRoute from "./routes/PrivateRoute";
import AdminRoute from "./routes/AdminRoute";
import { ThemeProvider } from "./context/ThemeContext";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistReducerStore from "./redux/store";

function App() {


 const {store, persistor}=persistReducerStore()
 console.log("store", store);
 
  return (
    <>
    <ThemeProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
      <Routes>
        <Route path="/*" element={<UserRoute />} />

        <Route element={<PrivateRoute />}>
          <Route path="/admin/*" element={<AdminRoute />} />
        </Route>
      </Routes>
      </PersistGate>
      </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
