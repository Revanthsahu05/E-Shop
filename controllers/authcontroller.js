const usermodel = require("../models/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generatetoken } = require("../utils/generatetoken");
module.exports.registerUSER = async (req, res) => {
  try {
    let { fullname, password, email } = req.body;
    let user = await usermodel.findOne({ email: email });
    if (user) {
      req.flash("error", "You already have an account. Please log in.");
      return res.redirect("/");
    }
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        try {
          let user = await usermodel.create({
            fullname,
            password: hash,
            email,
          });
          // res.send(user);
          // let token = jwt.sign({ email, id: user._id }, JWT_KEY);//took to utils
          // res.send(token)
          let token = generatetoken(user);
          res.cookie("token", token);
          // res.send("user created...");
          res.redirect("/shop");
        } catch (err) {
          console.log(err);
        }
      });
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports.loginUSER = async (req, res) => {
  let { email, password } = req.body;
  let user = await usermodel.findOne({ email });
  if (!user) {
    if (!user) {
      req.flash("error", "Email or password incorrect.");
      return res.redirect("/");
    }
  }
  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      let token = generatetoken(user);
      res.cookie("token", token);
        res.redirect("/shop");
    } else {
      if (!user) {
        req.flash("error", "Email or password incorrect.");
        return res.redirect("/");
      }
    }
  });
};
module.exports.logoutUSER=(req,res)=>{
  res.cookie("token","");
  res.redirect("/")
}