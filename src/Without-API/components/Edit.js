import React from "react";
import { useNavigate } from "react-router-dom";

const Edit = ({
  setData,
  setEditID,
  name,
  setName,
  email,
  setEmail,
  data,
  editID,
  setIsEdit,
}) => {
  const navigate = useNavigate();
  // update
  const updateUser = () => {
    if (name && email) {
      setData(
        data?.map((item) => {
          if (item.id === editID) {
            return { ...item, name, email };
          }
          return item;
        })
      );
      setName("");
      setEmail("");
      setEditID(null);
      setIsEdit(false);
    }
    navigate("/");
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
