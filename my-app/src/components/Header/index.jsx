import React from "react";
import "./style-header.css";
import bar from "./bar.jpg";

class NavBar extends React.Component {
  render() {
    return (
      <div className="header">
        <div class="row"></div>
        <div class="col s12 m7">
          <div class="card">
            <div class="card-image">
              <img src={bar}></img>
              <span class="card-title">Begin Searching Here!</span>
              <form></form>
            </div>
            <div class="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
