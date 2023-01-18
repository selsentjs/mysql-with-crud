import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

import axios from "axios";

const View = ({ data, setData, setName, setEmail }) => {
  // get Single Data

  const { id } = useParams();
  // get single data

  useEffect(() => {
    getSingleUser();
  }, []);

  const getSingleUser = async () => {
    const response = await axios.get(`http://localhost:3001/api/user/${id}`);
    //console.log("id:", id);
    //console.log("response.data: ", response.data);
    setName(response.data[0].name);
    setEmail(response.data[0].email);
    setData(response.data[0]);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
          </tr>
        </tbody>
      </table>
      <NavLink to="/">
        <button>Go to Home</button>
      </NavLink>
    </div>
  );
};

export default View;
