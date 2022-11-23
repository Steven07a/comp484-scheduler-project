import mongoose from "mongoose";

// creating a user schema all schemas get created this way
const users = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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
});

const usersSchema = mongoose.model("Users", users);
export default usersSchema;