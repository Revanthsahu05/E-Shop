const express=require('express')
const router=express.Router()
const upload=require("../config/multer-config")
const productmodel=require("../models/productmodel")
router.post("/create",upload.single("image"), async(req,res)=>{
    let { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;
    try{
 await productmodel.create({
      image:req.file.buffer,
      name,
      price,
      discount,
      bgcolor,
      panelcolor,
      textcolor,
   })
   req.flash("success","product created successfully")
  res.redirect("/owners/admin")
    }catch(err){
        res.send(err.message)
    }
})
module.exports=router