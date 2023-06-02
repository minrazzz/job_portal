const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = async (req, res) => {
  try {
    await mongoose.connect(process.env.URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connection successful!!!");
  } catch (error) {
    console.log(error);
  }
};
dbConnection();
