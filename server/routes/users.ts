
import Users from "../Model/users";
const jwt = require('jwt-simple');
export { }
const express = require('express');
const router = express.Router();


router.post( "/login", async(req,res)=>{

    try {
        const {ID , password} = req.body;
        const foundUser = await Users.findOne({id:ID})

        console.log(foundUser.password);
        if(foundUser){
            //if(foundUser.password===password){
   
              var payload = { id: ID };
              //var secret = process.env.SECRET;
             // var token = jwt.encode(payload, secret);  
            //  res.cookie("userInfo",token);
            res.send({ok:true,user:foundUser});
            // else{
            //     res.send({ok:false})
            // }
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

      //DELETE PRODUCT BY ID
    //   router.delete('/:productId', async(req,res)=>{
    //     try {
    //         const removedProduct= await Product.remove({_id: req.params.productId});
    //         res.json(removedProduct);
           
    //     } catch (error: any) {
    //         res.send({ ok: false, error: error.message });
    //     }
    // });

        //GET user BY ID


        router.post('/:userId', async(req,res)=>{
            try {
                const userById= await Users.findOne({ID: req.params.userId});
                console.log(userById);
                res.json(userById);
               
            } catch (error: any) {
                res.send({ ok: false, error: error.message });
            }
        });

      //update user groups
        // router.patch('/:userId', async(req,res)=>{
        //     try {
        //         const updatedUser= await Users.updateOne({ID: req.params.userId}, {$set :{groups:req.body}});
        //         console.log(updatedUser);
        //         res.json(updatedUser);
               
        //     } catch (error: any) {
        //         res.send({ ok: false, error: error.message });
        //     }
        // });
module.exports = router;