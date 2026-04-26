const { authcontrol  } = require("../controllers/authcontrol")

 function Auth( req,res){
    
    const token = req.headers.token;
    
    const uservfy = jwt.verify( token )
      
    if(uservfy){

        req.userid = uservfy.id

        const userid = req.userid
         next();
    }
    res.json({
        message :"user not found"
    })


 }

 module.export = {Auth}