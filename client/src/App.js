import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Mission from "./components/Mission";
import Footer from "./components/Footer";
import Register from "./components/Register";

// function App() {
class App extends React.Component {
  state = { showModal: false };
  handleShowMessageClick = () => this.setState({ showModal: true });
  handleCloseModal = () => this.setState({ showModal: false });
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="wrapper">
          <Header />
        </div>
        <Mission />
        <Register />
        <Footer />
      </div>
    );
  }
}

export default App;
