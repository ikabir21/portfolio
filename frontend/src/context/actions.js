import { AUTH } from "./constants";

const getActions = (dispatch) => {
  return {
    login: () => dispatch({ type: AUTH, payload: true })
  };
};

export default getActions;
