const  express =  require("express")
const  cors =  require("cors")
//import { v2 as cloudinary } from 'cloudinary';

const  authRoutes  = require('./routes/authRoutes')
const  courseroutes = require('./routes/courseroutes')
const cartroutes=  require('./routes/cartroutes')
const addressroute = require('./routes/addressroute.js')
const getroute = require('./routes/addressroute.js')
const app = express()
app.use(cors())
app.use(express.json())
//app.use(fileUpload({
    //useTempFiles : true,
  //  tempFileDir : '/tmp/'
//}));

app.use('/api/auth',authRoutes)
app.use('/api',courseroutes)
app.use('/api/auth',cartroutes)
app.use('/api/auth',addressroute)
app.use('/api/auth',getroute)
//const {  cloudinary } = require('cloudinary');

    // Configuration
 //   cloudinary.config({ 
   //     cloud_name: 'dsh2xdu2z', 
    //    api_key: '592924133214818', 
      //  api_secret: '<your_api_secret>' // Click 'View API Keys' above to copy your API secret
   // });
 
   
     
app.listen(3001)