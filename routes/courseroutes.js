const express = require('express')

const { Products } = require('../controllers/productcontrol')
const { getProducts } = require('../controllers/productcontrol')
const {  Updatepd } = require('../controllers/productcontrol')
const {  Deletepd  } = require('../controllers/productcontrol')
const router = express.Router();


router.post('/products',Products)
router.get('/getpd',getProducts)
router.put('/update/:id',Updatepd)
router.delete('/delete/:id',Deletepd)
module.exports = router
