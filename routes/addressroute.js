const express= require("express")

const { Addressadd } = require('../controllers/addresscontrol.js')
const { getaddress } = require('../controllers/addresscontrol.js')  
  
 const router = express.Router()

 router.post('/addressadd',Addressadd)
 router.get('/getaddress/:userId',getaddress)

 module.exports = router