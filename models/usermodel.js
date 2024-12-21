const mongoose=require('mongoose')
const userschema=mongoose.Schema({
    fullname:{
        type:String,
        trim:true
    },
    password:String,
    gmail:gmail,
    cart:{
        type:Array,
        default:[]
    },
    isadmin:Boolean,
    orders:{
        type:Array,
        default:[]
    },
    contact:Number,
    picture:String
})
module.exports=mongoose.model("user",userschema)
