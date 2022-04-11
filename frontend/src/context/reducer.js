/* eslint-disable no-case-declarations */
import { AUTH, SET_BG, SET_APP_OPEN } from "./constants";
import bgImage from "../assets/images/ubuntu-20-04-2.webp";

export const initialState = {
  isAuth: localStorage.getItem("isAuth") ? localStorage.getItem("isAuth") : false,
  bgImage: localStorage.getItem("bgImage") ? localStorage.getItem("bgImage") : bgImage,
  apps: {}
};

const reducer = (state, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("isAuth", true);
      return {
        isAuth: action.payload
      };
    case SET_BG:
      localStorage.setItem("bgImage", action.payload);
      return {
        ...state,
        bgImage: action.payload
      };
    case SET_APP_OPEN:
      const { appName, isOpen = false, isMaximized = false, isMinimized = false } = action.payload;
      return {
        ...state,
        apps: {
          ...state.apps,
          [appName]: { isOpen, isMaximized, isMinimized }
        }
      };
  }
  return state;
};

export default reducer;
