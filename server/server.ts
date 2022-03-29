import express from 'express';
const mongoose = require("mongoose");
//const products = require('./Routers/ProductRouter')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4001;
const productsRoute = require('./routes/products');
const usersRoute = require('./routes/users');
const groupsRoute = require('./routes/groups');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());
app.use('/products',productsRoute);
app.use('/users',usersRoute);
app.use('/groups',groupsRoute);
app.use(express.static('../client/build'));
app.use(express.json());

app.get("/", (req,res)=>{ 
     res.send("hello")
 })

 console.log(process.env.DB_CONNECTION);
 mongoose.connect(process.env.DB_CONNECTION,
 {useNewUrlParser: true},
 ()=>console.log('connected to DB !!')
 );

app.get('/*',(req, res)=>{
  res.sendFile(__dirname + '/../client/build/index.html');
})

 app.listen(port, () => {
   return console.log(`Express is listening at http://localhost:${port}`);
});
