import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Edit = ({ name, setName, email, setEmail, setData }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // get exisiting data
  useEffect(() => {
    getSingleData();
  }, []);

  const getSingleData = async () => {
    const response = await axios.get(`http://localhost:3001/api/user/${id}`);
    console.log("get single response:", response);
    setName(response.data[0].name);
    setEmail(response.data[0].email);
  };
  const updateUser = async () => {
    const response = await axios.put(`http://localhost:3001/api/user//${id}`, {
      name,
      email,
    });

    setData(response.data);
    navigate("/");
    window.location.reload(false);
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
        <button onClick={updateUser}>Update User</button>
      </form>
    </div>
  );
};

export default Edit;
