import React from "react";
import "./style-nav.css";
import logo2 from "./logo2.png";
// import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar-expand-lg ">
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navCollapse"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">&#9776;</span>
        </button>
        <ul className="nav">
          <li className="nav-item">
            {/* <img alt="" width={50} height={50} src={}></img> */}
          </li>
          <li></li>

          <div className="collapse navbar-collapse" id="navCollapse">
            <li className="nav-item main-title">
              <a
                href="#"
                to="/searchlistings"
                className={
                  window.location.pathname === "/searchlistings"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                {/* <img src={logo2}></img> */}
                <img alt="" width={100} height={100} src={logo2}></img>
                {/* Perfect Pub */}
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                to="/"
                className={
                  window.location.pathname === "/"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#"
                to="/searchlistings"
                className={
                  window.location.pathname === "/searchlistings"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Search
              </a>
            </li>
            {/* <li className="nav-item">
              <a
                href="#"
                to="/postlisting"
                className={
                  window.location.pathname === "/postlisting"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Post
              </a>
            </li> */}
            <li className="nav-item">
              <a
                href="#"
                to="/savedlistings"
                className={
                  window.location.pathname === "/savedlistings"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Saved
              </a>
            </li>

            <li className="nav-item ml-auto">
              <button
                className="btn btn-primary pull-right"
                id="button-nav"
                onClick={this.handleShowMessageClick}
              >
                Log In
              </button>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}

export default NavBar;
