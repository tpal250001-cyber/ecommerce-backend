const express = require("express")

const { Addtocard } = require('../controllers/cartcontroller')
const { Removeitem } = require('../controllers/cartcontroller')
const { updatequantity } = require('../controllers/cartcontroller')
 const {Getcart} = require('../controllers/cartcontroller')
//const { Addtocard } = require('../controlles/cartcontroller')

const router = express.Router() 

router.post('/cart',Addtocard);
router.post('/deleteitem',Removeitem)
router.post('/update',updatequantity)
router.get('/getcard/:userId',Getcart)

module.exports= router