
const express = require('express');
export { }
const router = express.Router();
const Orders = require('../Model/orders');


//GET ALL Orders
router.get('/', async(req,res)=>{
    
    try {
        const _orders = await Orders.find({});
        res.send({ ok: true, orders: _orders });
    } catch (error: any) {
        res.send({ ok: false, error: error.message });
    }
});


router.post('/',(req,res)=>{
    const { id,
        OwnerId,
        groupId,
        cartProducts,
    } = req.body;

    try{
        const order = new Orders({
            id:id,OwnerId:OwnerId,groupId:groupId,cartProducts:cartProducts
        });
        order.save()
        res.send(order);
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