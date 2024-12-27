const express = require("express");
const router = express.Router();
const ownermodel = require("../models/ownermodel");
router.get("/",  (req, res) => {
 res.send("hey its working");
});
if (process.env.NODE_ENV === "development") {
    //only available in development phase
    router.post("/create", async (req, res) => {
      let {fullname,password,email}=req.body
    let owners=await ownermodel.find({fullname})
if(owners.length){
    return res.status(404).send("you dont have permission to create a new owner")
}
let createduser=await ownermodel.create({
  fullname,
  password,
  email
});
  res.status(201).send(createduser);
  });
}
module.exports = router;
