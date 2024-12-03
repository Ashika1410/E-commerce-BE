const express = require('express');
const orderController = require('../Controller/orderController');
const router = express.Router();

    router.get('/',orderController.getAllOrders);
    router.get('/:id',orderController.getOrder);
    router.post('/',orderController.postOrder);
    router.put('/:id',orderController.putOrder);
    router.delete('/:id',orderController.deleteOrder);

module.exports=router;