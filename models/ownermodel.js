const mongoose=require('mongoose')
const ownerschema=mongoose.Schema({
    fullname:{
        type:String,
        trim:true
    },
    password:String,
    gmail:String,
    products:{
        type:Array,
        default:[]
    },
    picture:String,
    gstin:String
})
module.exports=mongoose.model("owner",ownerschema)
