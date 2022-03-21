import { AUTH, SET_BG } from "./constants";
import bgImage from "../assets/images/ubuntu-20-04-2.webp";

export const initialState = {
  isAuth: localStorage.getItem("isAuth") ? localStorage.getItem("isAuth") : false,
  bgImage: localStorage.getItem("bgImage") ? localStorage.getItem("bgImage") : bgImage
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
  }
  return state;
};

export default reducer;
