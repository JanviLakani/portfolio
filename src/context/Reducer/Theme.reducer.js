import { THEME_TYPE } from "../ActionTypes";

export const themeReducer = (state, action) => {
  switch (action.type) {
    case THEME_TYPE:
      return {
        theme: action.payload,
      };

    default:
      return state;
  }
};
