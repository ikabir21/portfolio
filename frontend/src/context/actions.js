import {
  AUTH,
  SET_BG,
  SET_APP_OPEN,
  SET_APP_STATE,
  SET_ALREADY_OPENED_APPS,
  SET_ALL_APPS
} from "./constants";

const getActions = (dispatch) => {
  return {
    login: () => dispatch({ type: AUTH, payload: true }),
    setBg: (bgImage) => dispatch({ type: SET_BG, payload: bgImage }),
    setAppOpen: (app) => dispatch({ type: SET_APP_OPEN, payload: app }),
    setAppState: (appState) => dispatch({ type: SET_APP_STATE, payload: appState }),
    setAlreadyOpenedApps: (appId) => dispatch({ type: SET_ALREADY_OPENED_APPS, payload: appId }),
    setAllApps: (allApps) => dispatch({ type: SET_ALL_APPS, payload: allApps })
  };
};

export default getActions;
