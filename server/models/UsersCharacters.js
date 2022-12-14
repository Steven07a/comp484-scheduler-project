import mongoose from "mongoose";

// creating a users character schema 
const usersCharacters = new mongoose.Schema({
  user: {
    type: String,
    required: true,
    unique: true,
  },
  timeSlot: {
    type: String,
  },
  usersCharacter: [
    {
      name: {
        type: String,
        unique: true,
      },
      class: {
        type: String,
      },
      gearScore: {
        type: String,
      },
      server: {
        type: String,
      },
    },
  ],
});

const usersCharactersSchema = mongoose.model("UsersCharactersSchema", usersCharacters);
export default usersCharactersSchema;