import React from "react";
import logo from "./logo.svg";
import ClassComponent from "./ClassComponent";
import "./App.css";

function App() {
  return (
    <>
      <ClassComponent data="(first data)" count={123} />

      <ClassComponent data="(second data)" />
    </>
  );
}

export default App;
