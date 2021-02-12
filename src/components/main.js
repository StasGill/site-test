import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Contacts from "../pages/Contacts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import { connect } from "react-redux";

const main = ({ isAuth }) => {
  return (
    <Suspense fallback={""}>
      <Switch>
        <Route path="/" exact component={Home} />
        {isAuth && <Route path="/contacts" component={Contacts} />}
        {!isAuth && <Route path="/login" component={Login} />}
        {!isAuth && <Route path="/register" component={Register} />}
        <Redirect to="/contacts" />
      </Switch>
    </Suspense>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.isAuth,
  };
};

export default connect(mapStateToProps)(main);
