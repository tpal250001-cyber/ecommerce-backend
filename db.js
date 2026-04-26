const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://tpal250001_db_user:tushar@cluster0.sfhfwki.mongodb.net/MY-APPS")

const Schema = mongoose.Schema;

const userschema = mongoose.Schema({

     email:String,
     name:String,
     password:Number
       })
const User = mongoose.model('User',userschema)

const Courseschema = mongoose.Schema({

      title:String,
      description:String,
       price:Number,
      image:String
})
const Courses = mongoose.model("Courses",Courseschema)
const productSchema = mongoose.Schema({

    title :String,
    price :Number,
    description:String,
    category:String,
    images:String,
    stock:Number
    })
    const Product = mongoose.model('Product',productSchema)
module.exports={
    User,
    Courses,
    Product
}