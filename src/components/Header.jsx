import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from '../assets/images/logo.png';
import '../assets/header.scss';
import * as Constants from '../constants';

class Header extends React.Component {
  render() {
    return (
      <header id="page-top">
        <div className="nav">
          <div className="navbar d-flex justify-content-between w-100">
            <div className="px-5">
              <Link to={Constants.PATH_HOMEPAGE}>
                <img src={logo} alt="Logo" id="Jemmay logo graphic" />
              </Link>
            </div>
            <div className="navbar-links px-5">
                <Link to={Constants.PATH_VISIT}>Visit</Link>
                <Link to={Constants.PATH_STAY}>Stay</Link>
                <Link to={Constants.PATH_TRAVEL}>Travel</Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
