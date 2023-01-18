import React from "react";
import "./App.css";
import MainFile from "./Without-API/components/MainFile";
import Main from './With-API-Using-MySQL/components/index';
import Home from './With-API-Using-MySQL/components/Home';

const App = () => {
  return (
    <div className="App">
      {/* <MainFile /> */}
      <Main />
    </div>
  );
};

export default App;
