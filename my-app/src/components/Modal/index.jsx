import React from "react";
import ReactDOM from "react-dom";
import "../Modal/style-modal.css";

const modalRoot = document.getElementById("modal-root");

class Modal extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  el = document.createElement("div");
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    let user = {
      username: this.state.username,
      password: this.state.password
    };

    fetch("http://localhost:3001/api/user/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(function(result) {
        return result.json();
      })
      .then(info => console.log(info));
  }

  render() {
    return ReactDOM.createPortal(
      <div
        style={{
          position: "absolute",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.3)"
        }}
      >
        <div
          style={{
            padding: 20,
            background: "#fff",
            borderRadius: "2px",
            display: "inline-block",
            minHeight: "300px",
            margin: "1rem",
            position: "relative",
            minWidth: "300px",
            justifySelf: "center"
          }}
          className="modal-body"
          id="id01"
        >
          {this.props.children}
          <hr />
          <form method="POST" action="/">
            <input
              className="input-sign"
              placeholder="Username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <hr />
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <hr />
            <button onClick={this.handleSubmit} id="button-modal">
              Log In
            </button>
            <hr />
          </form>
          <a href="/signup" id="member">
            Not a Member? Click here to Sign Up
          </a>
          <br />
          <br />
          <a href="/" id="exit">
            Exit
          </a>
        </div>
      </div>,
      this.el
    );
  }
}

export default Modal;
