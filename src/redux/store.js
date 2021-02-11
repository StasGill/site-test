import { createStore, applyMiddleware } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import Reducer from "./reducer/Reduser";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

const middleWares = [thunk];

const enhancer = applyMiddleware(...middleWares);

const store = createStore(Reducer, composeWithDevTools(enhancer));

export default store;

export const persistor = persistStore(store);
