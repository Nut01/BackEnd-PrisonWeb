require("dotenv").config();
const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 3000;
const app = express();

global.__basedir = __dirname;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.listen(port, () => {
  console.log("Server is running...");
  console.log(`Listening on port ${port}`);
});
