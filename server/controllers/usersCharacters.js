import express from "express";
import usersCharactersSchema from "../models/UsersCharacters.js";

const router = express.Router();

router.post("/updateCharacters", async (req, res) => {
  // make sure that character list exist
  usersCharactersSchema.findOne({ user: req.body.user }, (err, result) => {
    if (err) return res.status(409).json(err);

    const usersCharacterList = result;
    //console.log("result:" + result);
    if (result == null) {
      const characterSchema = new usersCharactersSchema({
        user: req.body.user,
        usersCharacter: [
          {
            name: req.body.name,
            class: req.body.class,
            gearScore: req.body.gearScore,
            server: req.body.server,
          },
        ],
      });

      characterSchema.save();
    } else {
      let character = {
        name: req.body.name,
        class: req.body.class,
        gearScore: req.body.gearScore,
        server: req.body.server,
      };
      //console.log(character);
      usersCharactersSchema.findOneAndUpdate(
        { user: req.body.user },
        { $push: { usersCharacter: character } },
        (err, result) => {
          if (err) console.log(err);
          res.status(200).json("character was added");
        }
      );
    }
  });
});

router.post("/getCharacters", async (req, res) => {
  // get all characters from user
  //console.log(req.body)
  usersCharactersSchema.findOne({ user: req.body.user }, (err, result) => {
    if (err) return res.status(409).json(err);

    const usersCharactersList = result;
    //console.log(usersCharactersList.usersCharacter);

    return res.status(200).json(usersCharactersList.usersCharacter);
  });
});

router.post("/getAllCharacters", async (req, res) => {
  // using find with no params returns every document
  usersCharactersSchema.find((err, result) => {
    if (err) return res.status(409).json(err);

    let AllCharacters = [];

    // goes through and creates an array of characters
    result.map((value) => {
      value.usersCharacter.map((character) => {
        AllCharacters.push({
          user: value.user,
          name: character.name,
          characterclass: character.class,
          gearscore: character.gearScore,
          server: character.server,
          timeslot: value.timeSlot,
        });
      });
    });

    return res.status(200).json(AllCharacters);
  });
});

router.post("/updateUsersTime", async (req, res) => {
  console.log(req.body)
  const doc = await usersCharactersSchema.findOneAndUpdate(
    { user: req.body.user },
    { timeSlot: req.body.availability },
    { new: true, upsert: true }
  );
  // if there is an item in the doc then it means we were able to update it return ok status
  if(doc) return res.status(209).json("Time was updated");

  return res.status(409).json("Unable to update")
});

export default router;
