import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DisplayCode from "./components/code-editor/code-editor";
import Header from "./components/header/header";
import "./assets/scss/styles.scss";

function App() {
  return (
    <>
       <Header />
       <DisplayCode />
    </>
  );
}

export default App;
