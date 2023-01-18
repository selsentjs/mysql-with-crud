import React from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

import { useNavigate } from "react-router-dom";

const Add = ({ data, setData, name, setName, email, setEmail }) => {
  const navigate = useNavigate();
  // post data
  const addUser = async () => {
    const response = await axios.post(`http://localhost:3001/api/user`, {
      id: uuid(),
      name,
      email,
    });
    console.log('post response:', response)
    setName("");
    setEmail("");
    navigate("/");
    setData([...data, response.data]);
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
