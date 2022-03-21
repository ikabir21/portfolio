import { AUTH, SET_BG } from "./constants";

const getActions = (dispatch) => {
  return {
    login: () => dispatch({ type: AUTH, payload: true }),
    setBg: (bgImage) => dispatch({ type: SET_BG, payload: bgImage })
  };
};

export default getActions;
