import React from "react";
import { CSSTransition } from "react-transition-group";
import { NavLink } from "react-router-dom";
import "../app.css";
import { connect } from "react-redux";
import style from "./Navigation.module.css";

const Navigation = ({ warning, isAuth }) => {
  return (
    <>
      <div className="addPanel addPanelNav">
        <CSSTransition in={true} timeout={300} classNames="alert" appear>
          <div>
            <NavLink
              to={{ pathname: "/" }}
              className={style.link}
              activeClassName={style.active}
              exact
            >
              <h1>Phonebook</h1>
            </NavLink>
          </div>
        </CSSTransition>
        <div>
          <ul className="addPanelList addPanelListNav">
            {isAuth && (
              <li className="addPanelListItem addPanelListItemNav">
                <NavLink
                  to={{ pathname: "/contacts" }}
                  className={style.link}
                  activeClassName={style.active}
                  exact
                >
                  CONTACTS
                </NavLink>
              </li>
            )}
            <li className="addPanelListItem addPanelListItemNav">
              <NavLink
                to={{ pathname: "/login" }}
                className={style.link}
                activeClassName={style.active}
              >
                LOGIN
              </NavLink>
            </li>
            {!isAuth && (
              <li className="addPanelListItem addPanelListItemNav">
                <NavLink
                  to={{ pathname: "/register" }}
                  className={style.link}
                  activeClassName={style.active}
                >
                  REGISTER
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    warning: state.warning,
    isAuth: state.isAuth,
  };
};

export default connect(mapStateToProps)(Navigation);
