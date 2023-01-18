const con = require("../database/connection");

// get all the user
const getAllUsers = async (req, res) => {
  try {
    const sql = await "SELECT id, name, email from USER";
    con.query(sql, (err, user) => {
      if (err) {
        throw err;
      }
      res.status(200).json({ user });
    });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

// get single user
const getSingleUser = async (req, res) => {
  try {
    let id = req.params.id;
    let sql = await "SELECT id,name,email from USER where id=?";
    con.query(sql, id, (err, user) => {
      if (err) {
        throw err;
      }
      res.status(200).json({ user });
    });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

// create new user

const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (name !=='' && email !=='') {
      let sql =
        (await "INSERT INTO USER(name, email) VALUES('") +
        name +
        "', '" +
        email +
        "')";
      con.query(sql, (err, user) => {
        if (err) {
          throw err;
        }
        res.status(200).json({ msg: "user created", user });
      });
    } else {
      res.send("All the fields are required");
    }
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

// update user
const updateUser = async (req, res) => {
  try {
    let id = req.params.id;
    let { name, email } = req.body;
    let sql = await "UPDATE USER SET name=?, email=? where id=?";
    console.log("sql", sql);
    con.query(sql, [name, email, id], (err) => {
      if (err) throw err;
      res.status(200).json({ msg: "data has been updated" });
    });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

// delete user

const deleteUser = async (req, res) => {
  try {
    let id = req.params.id;
    let sql = await "DELETE FROM USER where id=?";
    con.query(sql, id, (err) => {
      if (err) throw err;
      res.status(200).json({ msg: "data deleted successfully" });
    });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
