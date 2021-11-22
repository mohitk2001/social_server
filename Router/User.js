const express = require("express");
const router = express.Router();
const Users = require("../Models/User");
const bcrypt = require("bcrypt");
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

router.post("/login", async(req, res) => {
  try{
    const { email, password } = req.body.loginDetails;
    const found = await Users.findOne({ email: email }, (err, docs) => {
      if (err) console.log(err);
      console.log(docs)
      
    });
   console.log(found)
    // if (!found) {
    //   return res.json({
    //     error: "User does't exists You need to register first ",
    //   });
    // }
  }
   catch (error) {
      console.log(error)
  }
});

module.exports = router;
