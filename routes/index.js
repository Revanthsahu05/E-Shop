const express=require("express")
const router=express.Router()
const islogged=require("../middlewares/isloggedin")
const productmodel=require("../models/productmodel")
router.get("/",(req,res)=>{
  let error=req.flash("error")
  res.render("index", { error,loggedin:false }); 
})
router.get("/shop",islogged,async (req,res)=>{
  let products=await productmodel.find()
  res.render("shop",{products})
})
module.exports=router