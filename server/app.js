const express = require("express");
const app = express();
const cors = require("cors")
const router = require("./routes")
require("./db/connection")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(router)

app.listen(5000, () => {
    console.log("server is running port no 5000");
})