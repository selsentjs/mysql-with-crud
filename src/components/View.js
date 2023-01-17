import React from "react";
import { NavLink } from "react-router-dom";
const View = ({ viewData }) => {
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
            <td>{viewData.id}</td>
            <td>{viewData.name}</td>
            <td>{viewData.email}</td>
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
