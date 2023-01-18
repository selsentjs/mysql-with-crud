import React from "react";
import {  useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

const Add = ({ name, setName, email, setEmail, data, setData }) => {
  const navigate = useNavigate();

  // add
  const addUser = () => {
    const newUser = {
      id: uuid(),
      name,
      email,
    };
    navigate("/");
    setName("");
    setEmail("");
    setData([...data, newUser]);
  };
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /> <br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /> <br />
        <button onClick={addUser}>Add User</button>
      </form>
    </div>
  );
};

export default Add;
