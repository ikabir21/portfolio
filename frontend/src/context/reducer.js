/* eslint-disable no-case-declarations */
import { AUTH, SET_BG, SET_APP_OPEN, SET_APP_STATE, SET_ALREADY_OPENED_APPS } from "./constants";
import bgImage from "../assets/images/ubuntu-20-04-2.webp";
import apps from "../config/apps";

export const initialState = {
  isAuth: localStorage.getItem("isAuth") ? localStorage.getItem("isAuth") : false,
  bgImage: localStorage.getItem("bgImage") ? localStorage.getItem("bgImage") : bgImage,
  alreadyOpenedApps: [],
  appState: {
    focusedWindows: {},
    closedWindows: {},
    favouriteApps: {},
    hideSideBar: false,
    minimizedWindows: {},
    desktopApps: []
  },
  apps: apps
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
    case SET_APP_STATE:
      return {
        ...state,
        appState: { ...state.appState, ...action.payload }
      };
    case SET_ALREADY_OPENED_APPS:
      const apps = state.alreadyOpenedApps;
      apps.push(action.payload);
      return {
        ...state,
        alreadyOpenedApps: apps
      };
  }
  return state;
};

export default reducer;
