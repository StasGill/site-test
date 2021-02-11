import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signInOperation } from "../redux/operations/operations";
import { signOut } from "../redux/actions/actions";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [state, setState] = useState({ ...initialState });
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    dispatch(signInOperation(state));
    setState({ ...initialState });
  };

  const onHandleLogout = () => {
    dispatch(signOut());
  };

  return (
    <>
      <div className="addPanel">
        <form onSubmit={onHandleSubmit}>
          <h2>E-MAIL</h2>
          <input
            type="text"
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
            LOG IN
          </button>
          <button type="" className="handleButton" onClick={onHandleLogout}>
            LOG OUT
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
