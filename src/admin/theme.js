export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        primary: {
          100: "#e6f3ce",
          200: "#cde79c",
          300: "#b3dc6b",
          400: "#9ad039",
          500: "#81c408",
          600: "#679d06",
          700: "#4d7605",
          800: "#344e03",
          900: "#1a2702",
        },
        secondary: {
          100: "#fff0d3",
          200: "#ffe1a7",
          300: "#ffd37c",
          400: "#ffc450",
          500: "#ffb524",
          600: "#cc911d",
          700: "#996d16",
          800: "#66480e",
          900: "#332407",
        },
      blue: {
  100: "#d3e7ff", 
  200: "#a7ceff",
  300: "#7cb6ff",
  400: "#4677b5",
  500: "#2485ff", 
  600: "#1d6acc",
  700: "#155099",
  800: "#0e3566",
  900: "#071b33", 
},
      }
    : {
        primary: {
          100: "#1a2702",
          200: "#344e03",
          300: "#4d7605",
          400: "#679d06",
          500: "#81c408",
          600: "#9ad039",
          700: "#b3dc6b",
          800: "#cde79c",
          900: "#e6f3ce",
        },
        secondary: {
          100: "#332407",
          200: "#66480e",
          300: "#996d16",
          400: "#cc911d",
          500: "#ffb524",
          600: "#ffc450",
          700: "#ffd37c",
          800: "#ffe1a7",
          900: "#fff0d3",
        },
         blue: {
          100: "#071b33", 
          300: "#155099",
          400: "#509dff",
          500: "#2485ff", 
          600: "#509dff",
          700: "#7cb6ff",
          800: "#a7ceff",
          900: "#d3e7ff", 
        },

      }),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.secondary[400],
            },
          }
        : {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.secondary[400],
            },
          }),

      DataGrid: {
        headerBg: colors.primary[400],
        bg: mode === "dark" ? "#C7E681" : "#ddf0b2",
      },
    },

    
  };
};

// https://www.color-hex.com/color/8fce00
//  bg: mode === "dark" ? "#7c7c7c" : "#ddf0b2",
// headerBg: mode === "dark" ? "#3d3d3d" : "#557b00",
// footerBg: mode === "dark" ? "#565656" : "#bbe166",
