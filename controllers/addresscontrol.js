    //const address = await address.Create(req.body);
const { address } = require('../db2')

   async function Addressadd(req,res){

    const addresss = await address.create(req.body);

    res.json({
        message:"address save",
        addresss
    })

}

 async function getaddress(req,res){

  const addresss = await address.find({
    userId:req.params.userId
})

   res.json({
  addresss

   })

}
module.exports={
    Addressadd,
    getaddress
}
