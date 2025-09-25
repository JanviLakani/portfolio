// import { Children, createContext, useReducer } from "react";
// import { themeReducer } from "./Reducer/Theme.reducer";
// import { THEME_TYPE } from "./ActionTypes";

// const initialState = {
//   theme: "light",
// };

// export const ThemeContext = createContext();

// export const ThemeProvider = ({children}) => {
//   const [state, dispatch] = useReducer(themeReducer, initialState);

// const toogleTheme = (val) => {
//     dispatch({ type: THEME_TYPE, payload: val === "light" ? "dark" : "light" });
//   };

//   return (
//     <ThemeContext.Provider value={{ ...state, toogleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

import { Children, createContext, useEffect, useReducer } from "react";
import { themeReducer } from "./Reducer/Theme.reducer";
import { THEME_TYPE } from "./ActionTypes";

// const initialState = {
//   theme: "light",
// };

const initialState = () => {
  const saveTheme = localStorage.getItem("theme");
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const toogleTheme = (val) => {
    const newTheme = val === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    console.log("newTheme", newTheme);

    dispatch({ type: THEME_TYPE, payload: val === "light" ? "dark" : "light" });
  };

  useEffect(() => {
    const saveTheme = localStorage.getItem("theme");
      console.log("saveTheme",  saveTheme);

    
  }, []);

  return (
    <ThemeContext.Provider value={{ ...state, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
