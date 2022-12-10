import mongoose from "mongoose";

// creating a parties schema
const party = new mongoose.Schema({
  partyName: {
    type: String,
    required: true,
    unique: true,
  },
  characters: [
    {
      user: {
        type: String,
      },
      name: {
        type: String,
      },
      characterclass: {
        type: String,
      },
      gearscore: {
        type: String,
      },
      server: {
        type: String,
      },
    },
  ],
});

const partiesSchema = mongoose.model("parties", party);
export default partiesSchema;
