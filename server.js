require("dotenv").config();

// "IMPORTS"
const express = require("express");
const cors = require("cors");
const routes = require("./src/routes");

// "INITIAL INSTANCES"
const app = express();

// "MIDLEWARES"
app.use(express.json())
app.use(cors())
app.use(routes)

// "LISTENERS"
app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running..")
});
