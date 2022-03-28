
import Users from "../Model/users";
const jwt = require('jwt-simple');
export { }
const express = require('express');
const router = express.Router();


router.post( "/login", async(req,res)=>{

    try {
        const {ID , password} = req.body;
        const foundUser = await Users.findOne({id:ID})
        if(foundUser){
            if(foundUser.password===password){
             console.log(password);
              var payload = { id: ID };
              var secret = process.env.SECRET;
              var token = jwt.encode(payload, secret);  
              res.cookie("userInfo",token);
              res.send({ok:true});
            }else{
                res.send({ok:false})
            }
        }else{
          res.send({ok:false})
      }
   
      
    } catch (error) {
      res.send({ok:false})
     }
  })

//GET ALL USERS
router.get('/', async(req,res)=>{
    console.log('getAllUsers');
    try {
        const _users = await Users.find({});
        res.send({ ok: true, users: _users });
    } catch (error: any) {
        res.send({ ok: false, error: error.message });
    }
});


router.post('/',(req,res)=>{
    const { id,
        fullName,
        address,
        city,
        Email,
        phone,
        password,
        groups,
        orders

    } = req.body;

    try{
        const user = new Users({
            id:id,fullName:fullName,address:address,city:city,Email:Email,phone:phone,password:password,groups:groups,orders:orders
        });
        user.save()
        res.send(user);
        } catch(error){
         res.send({ error });
        }
         console.log(req.body);
      });

    //   //DELETE PRODUCT BY ID
    //   router.delete('/:productId', async(req,res)=>{
    //     try {
    //         const removedProduct= await Product.remove({_id: req.params.productId});
    //         res.json(removedProduct);
           
    //     } catch (error: any) {
    //         res.send({ ok: false, error: error.message });
    //     }
    // });
module.exports = router;