const mongoose  = require("mongoose");


mongoose.connect("mongodb+srv://tpal250001_db_user:tushar@cluster0.sfhfwki.mongodb.net/MY-APPS")

const Schema = mongoose.Schema;

const Cardsystem =mongoose.Schema({

   userId:{
   type :mongoose.Schema.Types.ObjectId,
   ref:'User',
   required:true
    },

  items:[
{
productId:{
  type:mongoose.Schema.Types.ObjectId,
  ref:'Product'
},
quantity:{
   type:Number,
   default:1
}

}]

})

const  Card = mongoose.model('card',Cardsystem)

module.exports={
 Card

}