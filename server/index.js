// imports
import express from "express";
// library to commuicate with mongodb server
import mongoose from "mongoose";
// library that allows us to call our own api's
import cors from "cors";
import cookieParser from "cookie-parser";
// api's wrritten by us
import userController from "./controllers/users.js";
import usersCharactersController from "./controllers/usersCharacters.js";
import partiesController from "./controllers/parties.js";

// allows us to pass data from backend to frontend in json format
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// db connection
mongoose.connect(
  "mongodb+srv://admin:8dlmgtkGBTNfIKLc@484project.hhmvxhh.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

// wrapper for all api funcitons w/ routes
app.use("/api/user", userController);
app.use("/api/userCharacters", usersCharactersController);
app.use("/api/parties", partiesController);

app.listen(3001, () => {
  console.log("server is running on port 3001");
});
