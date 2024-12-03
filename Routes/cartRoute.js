const express = require('express');
const cartController = require('../Controller/cartController');
const router = express.Router();

    router.get('/',cartController.getAllOrders);
    // router.get('/:id',cartController.getOrder);
    // router.post('/',cartController.postOrder);
    // router.put('/:id',cartController.putOrder);
    // router.delete('/:id',cartController.deleteOrder);

module.exports=router;