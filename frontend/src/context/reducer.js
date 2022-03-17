import { AUTH } from "./constants";

export const initialState = {
  isAuth: localStorage.getItem("isAuth") ? localStorage.getItem("isAuth") : false
};

const reducer = (state, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("isAuth", true);
      return {
        isAuth: action.payload
      };
  }
  return state;
};

export default reducer;
