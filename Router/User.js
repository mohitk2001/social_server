const express = require("express");
const router = express.Router();
const Users = require("../Models/User");
const bcrypt = require("bcrypt");
const validToken=require("../Middleware/Auth")
const { sign } = require("jsonwebtoken");
require("dotenv").config();
router.post("/register", (req, res) => {
  const { name, email, password } = req.body.registerDetails;
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      Users.create({
        name,
        email,
        password: hash,
      });
    })
    .catch((e) => {
      console.log(e);
    });
});

router.post("/login", (req, res) => {
  try {
    const { email, password } = req.body.loginDetails;
    Users.findOne({ email: email }, (err, docs) => {
      if (!err) {
        if (!Boolean(docs)) {
          return res.json({
            error: "User does not exist . You need to sign up first",
          });
        } else {
          bcrypt.compare(password, docs.password).then((match) => {
            if (!match) {
              return res.json({
                Comberror: "email and password combination is not correct",
              });
            } else if (match) {
              const token = sign(
                { email: docs.email, password: docs.password },
                process.env.secretKey,
                {
                  expiresIn: "2h",
                }
              );
              return res.json({ token: token, details: docs });
            }
          });
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
});
router.get("/checkin",validToken,(req,res)=>{
  console.log("here")
})
module.exports = router;
