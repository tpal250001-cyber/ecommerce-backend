const { Product } = require('../db')


 async function Products(req,res){
 
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    const category = req.body.category;
    const images = req.body.images;
    const stock = req.body.stock;
 
 
 
  const product =   await Product.create({
 
      title:title,
      price:price,
    description:description,
    category :category,
    images :images,
    stock:stock     })
 
     res.json({
    message :"product create succesful",
    product
      
      

     })
}

async function getProducts(req,res){

    const {search,category} = req.query;
    let filter = {};
    if(search){

      filter.title = {$regex:search, $options :'m'}
    }
    if(category){

   filter.category = category

    }
const products = await Product.find({})

res.json({
  
  products

})
}

async function Updatepd(req,res){

  const id = req.params.id;
     const body = req.body;

  const updated =  await Product.findByIdAndUpdate(
    
     
    
    { 
    id,
    body,
    new:true
     //return updated data
    

    
    

   }
  )

  res.json({
    updated
  })



}

async function Deletepd(req,res){

 
   const deleted = await Product.findByIdAndDelete(

      req.params.id,
      req.body,
      {new :true}
   )

   res.json({
    message:"it is deleted",
    deleted

   })


}


module.exports={
    Products,
    getProducts,
   Updatepd ,
   Deletepd
}