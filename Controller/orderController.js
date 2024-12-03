const orderRepo = require('../Repoistory/orders');

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await orderRepo.displayAllOrders();
        res.status(200).json(orders);
    } catch (err) {
        console.error("Error in displaying all orders", err);
        res.status(400).json({
            errorcode: 400,
            errormessage: err.message
        });
    }
};

exports.getOrder = async (req, res) => {
    try {
        const order = await orderRepo.displayOrder();
        res.status(200).json(order);
    } catch (err) {
        console.error("Error in displaying particular order", err);
        res.status(400).json({
            errorcode: 400,
            errormessage: err.message
        });
    }
};

exports.postOrder = async (req, res) => {
    const {details, amount, count, orderdate, deliverydate} = req.body;
    console.log(req.body);
    try {
        const order = await orderRepo.newOrders(details, amount, count, orderdate, deliverydate);
        res.status(200).json(order);
    } catch (err) {
        console.error("Cannot adding new product into orders", err);
        res.status(400).json({
            errorcode: 400,
            errormessage: err.message
        });
    }
};

exports.putOrder = async (req, res) => {
    try {
        const order = await orderRepo.updateOrder();
        res.status(200).json(order);
    } catch (err) {
        console.error("Error in updating order details", err);
        res.status(400).json({
            errorcode: 400,
            errormessage: err.message
        });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const order =await orderRepo.removeOrder();
        res.status(200).json(order);
    } catch (err) {
        console.error("Error in deleting order from order list", err);
        res.status(400).json({
            errorcode: 400,
            errormessage: err.message
        });
    }
};