require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
// database
require("./database/connection");

// router
const userRouter = require("./routes/userRoute");
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);


app.get("/", (req, res) => {
  res.send("welcome to backend");
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
