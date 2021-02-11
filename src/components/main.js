import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
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
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
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
