const express = require('express');
const productController = require('../Controller/productController');
const router = express.Router();


    router.get('/',productController.getAllProducts);
    router.get('/:id',productController.getProduct);
    router.get('/category/:id',productController.getProductCategory);
    router.post('/',productController.postProduct);
    router.put('/:id',productController.putProduct);
    router.delete('/:id',productController.deleteProduct);

module.exports=router;