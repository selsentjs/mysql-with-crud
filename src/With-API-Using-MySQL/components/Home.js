import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Home = ({ data, setData, setName, setEmail }) => {
  // get all users
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await axios.get(`http://localhost:3001/api/user`);
    console.log("get response:", response);
    setData(response.data);
  };

  // delete user
  const deleteUser = async (id) => {
    const response = await axios.delete(`http://localhost:3001/api/user/${id}`);
    setData(response.data);
    getAllUsers();
    window.location.reload(false);
  };

  return (
    <div>
      <NavLink to="/add">
        <button>Add User</button>
      </NavLink>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 ? (
            data?.map((item) => {
              return (
                <>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                      <NavLink to={`/edit/${item.id}`}>
                        <button>Edit</button>
                      </NavLink>
                      <button onClick={() => deleteUser(item.id)}>
                        Delete
                      </button>
                      <NavLink to={`/view/${item.id}`}>
                        <button>View</button>
                      </NavLink>
                    </td>
                  </tr>
                </>
              );
            })
          ) : (
            <h3>No data available</h3>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
