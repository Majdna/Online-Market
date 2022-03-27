import Products from "../Model/products";
//const Products = require("../Model/products");
export { }
const express = require('express');
const router = express.Router();



//GET ALL PRODUCTS
router.get('/', async(req,res)=>{
    console.log('getAllProducts');
    try {
        const _products = await Products.find({});
        res.send({ products: _products });
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
    
        const product = new Products({
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
            const removedProduct= await Products.remove({_id: req.params.productId});
            res.json(removedProduct);
           
        } catch (error: any) {
            res.send({ ok: false, error: error.message });
        }
    });

    //GET PRODUCT BY ID
    router.post('/:productId', async(req,res)=>{
        try {
            const productById= await Products.findOne({_id: req.params.productId});
            res.json(productById);
           
        } catch (error: any) {
            res.send({ ok: false, error: error.message });
        }
    });

     /* FIX IT !!!!! NOT CORRECT*/
     // update product quantity (by broduct id)
    router.patch('/:productId', async (req, res) => {
        try {
          const update = await Products.updateOne(
            { _id: req.params.productId },
            { $set: { quantity: req.body.quantity } }
          );
          res.json(update);
        } catch (err) {
          res.json({ message: err });
        }
      });
    // router.patch("/:id", (req, res) => {
    //     const product = Products.find(val => val.id === Number(req.params.id));
    //     product.quantity= req.body.name;
    //     return res.json({ message: "Updated" });
    //   });
module.exports = router;