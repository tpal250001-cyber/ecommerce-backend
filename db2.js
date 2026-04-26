//import { timeStamp } from "console";
//import mongoose from "mongoose";
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://tpal250001_db_user:tushar@cluster0.sfhfwki.mongodb.net/MY-APPS")
const Schema = mongoose.Schema;

const addresschema = mongoose.Schema({

  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user',
    required:true
    },
  fullname:String,
  phone:String,
  addressline :String,
  city:String,
  state:String,
  pincode:String
},
{
    timeStamp:true
}
)

const address = mongoose.model('address',addresschema)

module.exports={
    address
}

