const { Card } = require("../db1");

async function Addtocard(req,res){
      
  try{
     const { userId ,productId } = req.body;

  let card = await Card.findOne({userId})

  if(!card){
    card = new Card({userId,items:[{
            productId,quantity:1
}]
}) 
  }
  else{

  const item = card.items.find(
    item => item.productId.toString() === productId  )

  if(item){
   item.quantity += 1;
}
else{
card.items.push({
  productId,
  quantity:1
})
}
  }
await card.save();

res.json({
  message:"item added to card",
  card
})
}catch(error)
{
console.log('erroe',error)
}
}


 async function Removeitem(req,res){

const {userId ,productId} = req.body;

const card = await Card.findOne({userId})

if(!card){
  return res.status(404).json({message:"card not found"})

}
card.items = card.items.filter(
i => i.productId.toString() !== productId
 );

 await card.save();
 res.json({
  message:"removed item"

 })


}

async function updatequantity(req,res){

  const {userId , productId, quantity} = req.body;

  const card = await Card.findOne({userId});

  const item  = card.items.find(
    i=> i.productId.toString() === productId
  )
  if(!item){

    message:"it is not item"
  }
  item.quantity = quantity


await card.save()

res.json({
  message:"item quantity saved",
  Card

})
  
}
 async function Getcart(req,res) {
   const {userId } = req.params
  const cart  = await Card.findOne({userId}).populate("items.productId");

  if(!cart){
    return res.json({
      message :"cart is empty",
      cart:{userId,items:[]}
    })
  }
   cart.items = cart.items.filter(item => item.productId !== null)
   res.json({
    message:"it is get cart",
    cart
   })

 }

module.exports={
  Addtocard,
  Removeitem,
  updatequantity,
  Getcart
}


