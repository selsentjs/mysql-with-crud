require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
require("./database/connection");
const userRouter = require("./routes/userRoute");

app.use(express.json());
app.use("/api/user", userRouter);
app.use(cors());

app.get("/", (req, res) => {
  res.send("welcome to backend");
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
