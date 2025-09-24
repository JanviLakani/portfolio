import { Children, createContext, useReducer } from "react";
import { themeReducer } from "./Reducer/Theme.reducer";
import { THEME_TYPE } from "./ActionTypes";

const initialState = {
  theme: "light",
};

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

const toogleTheme = (val) => {
    dispatch({ type: THEME_TYPE, payload: val === "light" ? "dark" : "light" });
  };

  return (
    <ThemeContext.Provider value={{ ...state, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
