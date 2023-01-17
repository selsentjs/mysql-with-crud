import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Add from "./components/Add";
import Edit from "./components/Edit";
import View from "./components/View";

import Data from "./components/Data/Data";

const App = () => {
  // main state
  const [data, setData] = useState(Data);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // edit
  const [isEdit, setIsEdit] = useState(false);
  const [editID, setEditID] = useState(null);

  // view
  const [viewData, setViewData] = useState([]);

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
                setName={setName}
                setEmail={setEmail}
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                editID={editID}
                setEditID={setEditID}
                setViewData={setViewData}
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
            element={<View viewData={viewData} setViewData={setViewData} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
