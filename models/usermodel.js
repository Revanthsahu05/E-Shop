const mongoose=require('mongoose')
const userschema=mongoose.Schema({
    fullname:{
        type:String,
        trim:true
    },
    password:String,
    email:String,
    cart:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",   
     }],
    orders:{
        type:Array,
        default:[]
    },
    contact:Number,
    picture:String
})
module.exports=mongoose.model("user",userschema)
