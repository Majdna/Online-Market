import Users from "../Model/users";

const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple');

router.post( "/login", async(req,res)=>{

  try {
      const {ID , password} = req.body;
      const foundUser = await Users.findOne({id:ID})
      if(foundUser){
          if(foundUser.password===password){
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

// router.post( "/signUp", async(req,res)=>{

//     try {
//         const {ID , password} = req.body;
//         const foundUser = await Users.findOne({id:ID})
//         if(!foundUser){
//             const newUser = new Users({
//                 id:ID,
//                 password:password,
//             });
//             newUser.save();
//               var payload = { id: ID };
//               var secret = process.env.SECRET;
//               var token = jwt.encode(payload, secret);  
//               res.cookie("userInfo",token);
//               res.send({ok:true});
//         }else{
//           res.send({ok:false})
//       }
   
      
//     } catch (error) {
//       res.send({ok:false})
//      }
//   })

module.exports=router;