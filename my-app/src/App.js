import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Mission from "./components/Mission";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Mission />
    </div>
  );
}

export default App;
