import {
  ADDNEWNUMBER,
  DELETENUMBER,
  SETFILTER,
  SETWARNING,
  GETNEWNUMBER,
  SIGNUP,
  SIGNIN,
  SIGNOUT,
  SETLOADING,
  SETERROR,
} from "../constant/constant";
import { createReducer } from "@reduxjs/toolkit";
import { getContacts } from "../contacts-selectors.js";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  contacts: [],
  filter: "",
  warning: "",
  email: "",
  idToken: "",
  refreshToken: "",
  isAuth: false,
  error: "",
  isLoading: false,
};

const Reducer = createReducer(
  { ...initialState },
  {
    [ADDNEWNUMBER]: (state, action) => ({
      ...state,
      contacts: [...getContacts(state), action.payload],
    }),
    [GETNEWNUMBER]: (state, action) => ({
      ...state,
      contacts: [...action.payload],
    }),
    [DELETENUMBER]: (state, action) => {
      return {
        ...state,
        contacts: [
          ...state.contacts.filter((item) => item.id !== action.payload),
        ],
      };
    },
    [SETFILTER]: (state, action) => ({
      ...state,
      filter: action.payload,
    }),
    [SETWARNING]: (state, action) => ({
      ...state,
      warning: action.payload,
    }),
    [SIGNUP]: (state, action) => ({
      ...state,
      email: action.payload.email,
      idToken: action.payload.idToken,
      refreshToken: action.payload.refreshToken,
      isAuth: true,
    }),
    [SIGNIN]: (state, action) => ({
      ...state,
      email: action.payload.email,
      idToken: action.payload.idToken,
      refreshToken: action.payload.refreshToken,
      isAuth: true,
    }),
    [SIGNOUT]: (state, action) => ({
      ...initialState,
    }),
    [SETLOADING]: (state, action) => ({
      ...state,
      isLoading: !state.isLoading,
    }),
    [SETERROR]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  }
);

const authPersistConfig = {
  key: "root",
  storage,
  whitelist: ["email", "idToken", "refreshToken", "isAuth"],
};

export default persistReducer(authPersistConfig, Reducer);
