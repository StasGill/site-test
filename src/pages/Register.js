import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { signUpOperation } from "../redux/operations/operations";
import { useLocation } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

const Register = () => {
  const [state, setState] = useState({ ...initialState });

  const location = useLocation();

  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    dispatch(signUpOperation(state));
    setState({ ...initialState });
  };

  return (
    <>
      <div className="addPanel">
        <form onSubmit={onHandleSubmit}>
          <h2>E-MAIL</h2>
          <input
            type="e-mail"
            className="addPanelInput"
            placeholder="Type e-mail..."
            name="email"
            value={state.email}
            onChange={onHandleChange}
          ></input>
          <h2>PASSWORD</h2>
          <input
            type="text"
            className="addPanelInput"
            placeholder="Type password..."
            name="password"
            value={state.password}
            onChange={onHandleChange}
          ></input>
          <br />
          <button type="submit" className="handleButton">
            {location.pathname === "/signup" ? "SignUp" : "SignIn"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
