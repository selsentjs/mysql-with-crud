import React from "react";
import { NavLink } from "react-router-dom";

const Home = ({
  data,
  setViewData,
  setEditID,
  setName,
  setEmail,
  setIsEdit,
}) => {
  // view
  const viewUser = (item) => {
    setViewData(item);
  };

  // edit
  const editUser = (item) => {
    setEditID(item);
    setName(item.name);
    setEmail(item.email);
    setIsEdit(true);
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
                        <button onClick={() => editUser(item.id)}>Edit</button>
                      </NavLink>
                      <button>Delete</button>
                      <NavLink to={`/view/${item.id}`}>
                        <button onClick={() => viewUser(item)}>View</button>
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
