const express = require("express");
const router = express.Router();
const {registerUSER,loginUSER,logoutUSER}=require("../controllers/authcontroller")
const islogged = require("../middlewares/isloggedin")
router.get("/",(req, res) => {
  res.send("Hello");
});
router.post("/register",registerUSER);
router.post("/login",loginUSER)
router.get("/logout",logoutUSER)
module.exports = router;
