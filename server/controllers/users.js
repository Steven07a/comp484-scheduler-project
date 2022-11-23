import express from "express";
import usersSchema from "../models/users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register", async (req, res) => {
  var userExist = {};
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
          name: req.body.name,
          password: hash,
          email: req.body.email,
        });
        // tries to save user to db if everything is ok then send ok msg otherwise return error
        try {
          users.save();
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
      
      if(userExist) {
          const isPasswordCorrect = bcrypt.compareSync(
            req.body.password,
            userExist.password
          );
            console.log(isPasswordCorrect);
          if(!isPasswordCorrect) 
            return res.status(400).json("Wrong username or password")
            console.log(userExist);
            const token = jwt.sign({ email: userExist.email }, "jwtkey");
            
            // stores user information inside of local storage
            const userInfo = {
                name: userExist.name,
                email: userExist.email,
            }
            console.log(userInfo)
            res.cookie("access_token", token, {
                httpOnly: true,
            })
            .status(200)
            .json(userInfo);
      } else {
        return res.status(409).json("Please check email and password and try again.")
      }
    }
  );
});

router.post("/logout", (req,res) => {
  return res.clearCookie("accesss_token", {
    sameSite: "none",
    secure: true
  }).status(200).json("User has been logged out")
})

export default router;
