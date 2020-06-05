require("dotenv").config();
require("./src/database");

// "IMPORTS"
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./src/routes");

// "INITIAL INSTANCES"
const app = express();

// "MIDLEWARES"
app.use(helmet());
app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());
app.use(routes);

// "LISTENERS"
app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running in PORT=" + process.env.PORT);
});
