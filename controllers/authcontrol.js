
const  jwt  =  require('jsonwebtoken');
JWT_SECRET = "tusar"
const { User } = require('../db')
async function Signup(req,res) {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
 
    await User.create({
        email:email,
        name:name,
        password:password
    })
   res.json({
        message:"it is signup"
    })
 
}
  
  
 async function Login(req,res){
 
 const email = req.body.email;
  const password = req.body.password;
   
    const users =  await User.findOne({
 
    email:email,
    password:password
  
 })
 if(users){
    const token = jwt.sign({
        id :users._id
    },JWT_SECRET)
  
     res.json({
      token,
      message:"it signin",
        id:users._id,
    name:users.name,
    email:users.email
    
   })
 } else{
    res.json({
   message :"it is not signin"
  
    })
 }}
 module.exports = {Signup , Login}





























