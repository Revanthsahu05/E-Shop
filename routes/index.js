const express=require("express")
const router=express.Router()
const productmodel=require("../models/productmodel")
const usermodel=require("../models/usermodel")
const isloggedin = require("../middlewares/isloggedin")
router.get("/",(req,res)=>{
  let error=req.flash("error")
  res.render("index", { error,loggedin:false }); 
})
router.get("/addtocart/:pid",isloggedin,async (req,res)=>{
  let user=await usermodel.findOne({email:req.user.email})
    user.cart.push(req.params.pid);
     await user.save();
     req.flash("success", "Added to cart");
     res.redirect("/shop");
})
router.get("/shop",isloggedin,async (req,res)=>{
  let products=await productmodel.find()
  let success=req.flash("success");
  res.render("shop",{products,success})
})
router.get("/cart",isloggedin,async(req,res)=>{
  try{
  let user =await usermodel.findOne({email:req.user.email}).populate("cart");
  res.render("cart",{user});
  }catch(err){
    console.log(err.message)
  }
})
module.exports=router