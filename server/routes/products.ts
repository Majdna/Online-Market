const express = require('express');
const router = express.Router();
const Product = require('../Model/products');


//GET ALL PRODUCTS
router.get('/', async(req,res)=>{
    console.log('getAllProducts');
    try {
        const _products = await Product.find({});
        res.send({ ok: true, products: _products });
    } catch (error: any) {
        res.send({ ok: false, error: error.message });
    }
});

router.post('/',(req,res)=>{
    const { id,
        name,
        price,
        catagory,
        quantity,
        amount,
        description,
        Url
    } = req.body;

    try{
    
        const product = new Product({
            id:id,name:name,price:price,catagory:catagory,quantity:quantity,amount:amount,description:description,Url:Url
        });
        product.save()
        res.send(product);
        } catch(error){
         res.send({ error });
        }
         console.log(req.body);
      });


      //DELETE PRODUCT BY ID
      router.delete('/:productId', async(req,res)=>{
        try {
            const removedProduct= await Product.remove({_id: req.params.productId});
            res.json(removedProduct);
           
        } catch (error: any) {
            res.send({ ok: false, error: error.message });
        }
    });
module.exports = router;