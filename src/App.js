import React from "react";
import { Address } from "./components/Address";
import { Todolist } from "./components/Todolist";
// import "./components/common.css";
// import { Todolist } from "./components/Todolist";
import { Todoyasin } from "./components/Todoyasin";

function App() {
  return (
    <div>
      {/* <Todolist /> */}
      {/* <Todoyasin /> */}
      <Todolist />
      <Address />
    </div>
  );
}

export default App;
