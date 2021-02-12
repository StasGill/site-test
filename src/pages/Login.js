import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { signInOperation } from "../redux/operations/operations";
import { signOut } from "../redux/actions/actions";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

const initialState = {
  email: "",
  password: "",
};

const Login = (isAuth, { history, location }) => {
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
    // history.push("/contacts");
  };
  // const historyPush = () => {
  //   history.push("/contacts");
  // };

  // const onHandleLogout = () => {
  //   dispatch(signOut());
  // };

  // useEffect(() => {

  // }, [isAuth]);

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
        </form>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.isAuth,
  };
};

export default connect(mapStateToProps)(Login);
