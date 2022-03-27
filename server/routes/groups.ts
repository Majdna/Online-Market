import Groups from "../Model/groups";
const express = require('express');
export { }
const router = express.Router();

//const Groups = require('../Model/groups');


//GET ALL Groups
router.get('/', async(req,res)=>{
    
    try {
        const _group = await Groups.find({});
        res.send({ ok: true, group: _group});
    } catch (error: any) {
        res.send({ ok: false, error: error.message });
    }
});


router.post('/',(req,res)=>{
    const { ID,
        Name,
        adminId,
        Members,
    } = req.body;

    try{
        const group = new Groups({
            ID:ID,Name:Name,adminId:adminId,Members:Members
        });
        group.save()
        res.send(group);
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