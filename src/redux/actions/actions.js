import { v4 as uuidv4 } from "uuid";
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
import { createAction } from "@reduxjs/toolkit";

// export const addNewNumber = (data) => ({
//   type: ADDNEWNUMBER,
//   payload: { ...data, id: uuidv4() },
// });

// export const deleteNumber = (id) => ({
//   type: DELETENUMBER,
//   payload: id,
// });

// export const setFilter = (value) => ({
//   type: SETFILTER,
//   payload: value,
// });
// export const setWarning = (warning) => ({
//   type: SETWARNING,
//   payload: warning,
// });

export const addNewNumber = createAction(ADDNEWNUMBER, (data) => ({
  payload: {
    ...data,
    id: uuidv4(),
  },
}));
export const getNumber = createAction(GETNEWNUMBER, (data) => ({
  payload: [...data],
}));
export const deleteNumber = createAction(DELETENUMBER);
export const setFilter = createAction(SETFILTER);
export const setWarning = createAction(SETWARNING);
export const signUp = (user) => ({ type: SIGNUP, payload: user });
export const signIn = (user) => ({ type: SIGNIN, payload: user });
export const signOut = () => ({ type: SIGNOUT });
export const setLoading = () => ({ type: SETLOADING });
export const setError = (error) => ({ type: SETERROR, payload: error });
