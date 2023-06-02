const express = require("express");
const app = express();
require("./database/Connection");
require("dotenv").config();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { errorHandler } = require("./middleware/error");
const router = require("./routes/router");

// app.use(cors({credentials:true,origin:"http://localhost:5173"}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Othermiddleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

//Routes
app.use("/api", router);

//error-middleware
app.use(errorHandler);

try {
  let PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`port is listening at ${PORT}`);
  });
} catch (error) {}
