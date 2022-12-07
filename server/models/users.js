import mongoose from "mongoose";

// creating a user schema all schemas get created this way
const users = new mongoose.Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  timeslot: {
    type: String,
  },
  user: {
    type: String,
    unique: true,
  }
});

const usersSchema = mongoose.model("Users", users);
export default usersSchema;