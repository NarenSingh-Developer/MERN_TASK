const mongoose = require("mongoose");
const DB = "mongodb://localhost:27017/AVEOSOFT";

mongoose
  .connect(DB)
  .then(() => console.log("connection successfull"))
  .catch(() => console.log("no connection"));
