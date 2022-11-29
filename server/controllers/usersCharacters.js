import express from "express";
import usersCharactersSchema from "../models/UsersCharacters.js";

const router = express.Router();

router.post("/updateCharacters", async (req, res) => {
  // make sure that character list exist
  usersCharactersSchema.findOne({user: req.body.user}, (err,result) => {
    if(err) return res.status(409).json(err);

    const usersCharacterList = result;
    console.log(req.body);

  })
  
  
});

export default router;