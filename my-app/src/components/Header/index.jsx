import React from "react";
import "./style-header.css";
import bar from "./bar.jpg";

function Header() {
  return (
    <div
      className="jumboWrap"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="jumbotron landingJumbo">
        <h1 className="display-4 landingHead">Perfect Pub</h1>
        <p className="lead">A simple way to find the perfect pub.</p>
        <p className="lead">Search Here!</p>
        <form class="form-inline">
          <div class="form-group mb-2">
            <label for="staticEmail2" class="sr-only">
              Email
            </label>
            {/* <input
              type="text"
              readonly
              class="form-control-plaintext"
              id="staticEmail2"
              value="email@example.com"
            ></input> */}
          </div>
          <div class="form-group mx-sm-3 mb-2">
            <label for="inputPassword2" class="sr-only">
              Search by Zip Code:
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword2"
              placeholder=" Search by Zip Code:"
            ></input>
          </div>
          <button type="submit" class="btn btn-primary mb-2">
            Enter!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
