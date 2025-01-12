const jwt=require("jsonwebtoken")
const usermodel=require("../models/usermodel")
module.exports=async (req,res,next)=>{
 if(!req.cookies.token){
    req.flash("You need to login")
    return res.redirect("/")
 }
 try{
    let decoded=jwt.verify(req.cookies.token,process.env.SECRET_KEY)
    let user=await usermodel.findOne({email:decoded.email}).select("-password")
    req.user=user;
    next()
 }catch(err){
   req.flash("error","something went wrong")
   res.redirect("/")
 }
}