import { AUTH, SET_BG, SET_APP_OPEN } from "./constants";

const getActions = (dispatch) => {
  return {
    login: () => dispatch({ type: AUTH, payload: true }),
    setBg: (bgImage) => dispatch({ type: SET_BG, payload: bgImage }),
    setAppOpen: (app) => dispatch({ type: SET_APP_OPEN, payload: app })
  };
};

export default getActions;
