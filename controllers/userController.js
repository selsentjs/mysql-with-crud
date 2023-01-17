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
try{
    const {name, email} = req.body;
    if(name.trim()!="" && email.trim()!=""){
        let sql = await "INSERT INTO USER(name, email) VALUES('"+
        name +
        "', '" +
        email +
         "')";
        con.query(sql, (err,user) => {
            if(err){
                throw err
            }
            res.status(200).json({msg:'user created', user})
        })
    }
    else{
        res.send('All the fields are required')
    }

}
catch(err) {
    res.status(500).json({msg:err})
}
};

// update user
const updateUser = async (req, res) => {
  res.send("update user");
};

// delete user

const deleteUser = async (req, res) => {
  res.send("delete user");
};

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
