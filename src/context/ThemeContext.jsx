import { Children, createContext, useEffect, useReducer } from "react";
import { themeReducer } from "./Reducer/Theme.reducer";
import { THEME_TYPE } from "./ActionTypes";

const initialState = {
  theme: "light",
};

const themeset=() => {

  const theme=localStorage.getItem("theme")

  console.log("theme" , theme);

  if(theme) {

    return {theme}

  } else {
    return {theme : "dark"}
  }
  

}


export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [state, dispatch] = useReducer(themeReducer, themeset());

  useEffect(() => {
    localStorage.setItem("theme" ,state.theme )
    
  }, [state.theme]);

const toogleTheme = (val) => {
    dispatch({ type: THEME_TYPE, payload: val === "light" ? "dark" : "light" });
  };

  return (
    <ThemeContext.Provider value={{ ...state, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// import { Children, createContext, useEffect, useReducer } from "react";
// import { themeReducer } from "./Reducer/Theme.reducer";
// import { THEME_TYPE } from "./ActionTypes";

// const initialState = {
//   theme: "light",
// };

// const initialState = () => {
//   const saveTheme = localStorage.getItem("theme");
//   console.log("saveTheme" , saveTheme);
  
//   return saveTheme

// };

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(themeReducer, initialState());

//   const toogleTheme = (val) => {
//     const newTheme = val === "light" ? "dark" : "light";

//     localStorage.setItem("theme", newTheme);
//     console.log("newTheme", newTheme);

//     dispatch({ type: THEME_TYPE, payload: val === "light" ? "dark" : "light" });
//   };


//   return (
//     <ThemeContext.Provider value={{ ...state, toogleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

  // useEffect(() => {
  //   const saveTheme = localStorage.getItem("theme");
  //     console.log("saveTheme",  saveTheme);
    
  // }, []);