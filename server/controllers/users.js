import express from "express";
import usersSchema from "../models/users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import usersCharactersSchema from "../models/UsersCharacters.js";
const router = express.Router();

router.post("/register", async (req, res) => {
  var userExist = {};
  console.log(req.body);

  // does a case-insensitive search for a user with this email
  usersSchema.findOne(
    { email: { $regex: req.body.email, $options: "i" } },
    (err, result) => {
      if (err) console.log("Error: " + err);

      userExist = result;

      // if user does not already exist then create a new user and return ok msg
      if (!userExist) {
        // salt and has the password so its not stored as plain text
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const users = new usersSchema({
          name: "",
          password: hash,
          email: req.body.email,
          timeslot: "",
          user: req.body.user,
        });

        const usersCharacterSchema = new usersCharactersSchema({
          user: req.body.user,
        });

        // tries to save user to db if everything is ok then send ok msg otherwise return error
        try {
          users.save();
          usersCharacterSchema.save();
          return res.status(200).json("user was created");
        } catch (err) {
          return res.json(err);
        }
      } else {
        return res.status(409).json("user already exist");
      }
    }
  );
});

router.post("/login", async (req, res) => {
  var userExist;
  // does a case-insensitive search for a user with this email
  usersSchema.findOne(
    { email: { $regex: req.body.email, $options: "i" } },
    (err, result) => {
      if (err) console.log("Error: " + err);
      // query stores user into result
      userExist = result;

      if (userExist) {
        const isPasswordCorrect = bcrypt.compareSync(
          req.body.password,
          userExist.password
        );
        console.log(isPasswordCorrect);
        if (!isPasswordCorrect)
          return res.status(400).json("Wrong username or password");
        console.log(userExist);
        const token = jwt.sign({ email: userExist.email }, "jwtkey");

        // stores user information inside of local storage
        const userInfo = {
          name: userExist.name,
          email: userExist.email,
          timeslot: userExist.timeslot,
          user: userExist.user,
        };

        console.log(userInfo);
        res
          .cookie("access_token", token, {
            httpOnly: true,
          })
          .status(200)
          .json(userInfo);
      } else {
        return res
          .status(409)
          .json("Please check email and password and try again.");
      }
    }
  );
});

router.post("/logout", (req, res) => {
  return res
    .clearCookie("accesss_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User has been logged out");
});

// runs first time user enters profile as we need to ask them there unique username and timeavailable
router.post("updateInfoFirst", async (req, res) => {
  const filter = req.body.email;
  const update = {
    user: req.body.user,
    timeslot: req.body.availability,
  };

  // updates users table
  const doc = await usersSchema.findOneAndUpdate(
    filter,
    update,
    (err, result) => {
      if (err) return res.status(409).json(err);
      console.log(result);

      // adds username to users characters schema
      const usersCharacterSchema = new usersCharactersSchema({
        user: req.body.user,
      });
      try {
        usersCharacterSchema.save();
      } catch (err) {
        return res.status(409).json(err);
      }

      return res.status(200).json("User info has been updated");
    }
  );
});

export default router;
