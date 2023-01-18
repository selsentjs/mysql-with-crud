import React, { useState } from "react";
import "../../App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Add from "./Add";
import Edit from "./Edit";
import View from "./View";

const Main = () => {
  // main state
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

 
  return (
    <div className="App">
      <h1>CRUD using MySQL</h1>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                data={data}
                setData={setData}
               
              />
            }
          />
          <Route
            path="/add"
            element={
              <Add
                data={data}
                setData={setData}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
              />
            }
          />
          <Route
            path="/edit/:id"
            element={
              <Edit
                data={data}
                setData={setData}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
              
              />
            }
          />

          <Route
            path="/view/:id"
            element={
              <View
                data={data}
                setName={setName}
                setEmail={setEmail}
                setData={setData}
               
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
