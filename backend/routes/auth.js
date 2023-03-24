const express = require("express");
const { body, validationResult } = require("express-validator");

const User = require("../models/User");

const router = express.Router();

// create user using post :dosen't  require authentictaion
router.post(
  "/",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password").isLength({ min: 5 }),
  ],
  (req, res) => {
    console.log(req.body);
const error=validationResult(req);
if(!error.isEmpty()){
    res.status(400).json({error:error.array()})
}
    // const user = User(req.body);
    // user.save();
    res.send(req.body);
  }
);

module.exports = router;
