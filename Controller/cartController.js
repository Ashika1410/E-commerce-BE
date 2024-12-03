const cartRepo = require('../Repoistory/cart');

exports.getAllItems = async (req, res) => {
    try {
        const carts = await cartRepo.displayAllItems();
        res.status(200).json(carts);
    } catch (err) {
        console.error("Error in displaying all orders", err);
        res.status(400).json({
            errorcode: 400,
            errormessage: err.message
        });
    }
};

exports.getCart = async (req, res) => {
    try {
        const cart = await cartRepo.displayCart();
        res.status(200).json(cart);
    } catch (err) {
        console.error("Error in displaying particular order", err);
        res.status(400).json({
            errorcode: 400,
            errormessage: err.message
        });
    }
};

exports.postItem = async (req, res) => {
    const {details, amount, count, orderdate, deliverydate} = req.body;
    console.log(req.body);
    try {
        const cart = await cartRepo.newItem(details, amount, count, orderdate, deliverydate);
        res.status(200).json(cart);
    } catch (err) {
        console.error("Cannot adding new product into orders", err);
        res.status(400).json({
            errorcode: 400,
            errormessage: err.message
        });
    }
};

exports.putItem = async (req, res) => {
    try {
        const cart = await cartRepo.updateCart();
        res.status(200).json(cart);
    } catch (err) {
        console.error("Error in updating order details", err);
        res.status(400).json({
            errorcode: 400,
            errormessage: err.message
        });
    }
};

exports.deleteItem = async (req, res) => {
    try {
        const cart =await cartRepo.removeItem();
        res.status(200).json(cart);
    } catch (err) {
        console.error("Error in deleting order from order list", err);
        res.status(400).json({
            errorcode: 400,
            errormessage: err.message
        });
    }
};