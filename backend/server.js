const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
require("./database/Connection");
require("dotenv").config();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { errorHandler } = require("./middleware/error");
//import routes
const router = require("./routes/router");
const userRouter = require("./routes/userRouter");
const jobTypeRoutes = require("./routes/jobTypeRoutes");
const jobRouter = require("./routes/jobRouter");

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

//Othermiddleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use("/uploads", express.static("uploads"));

//Routes
app.use("/api", router);
app.use("/api", userRouter);
app.use("/api", jobTypeRoutes);
app.use("/api", jobRouter);

//error-middleware
app.use(errorHandler);

try {
   let PORT = process.env.PORT;
   app.listen(PORT, () => {
      console.log(`port is listening at ${PORT}`);
   });
} catch (error) {}
