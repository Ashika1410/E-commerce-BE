const productRepo = require('../Repoistory/products')

exports.getAllProducts = async (req, res) => {
    try {
        const products = await productRepo.displayAllProducts();
        res.status(200).json(products);
    } catch (err) {
        console.error("Error in displaying all products", err);
        res.status(400).json({
            errorcode: 400,
            errormessage: err.message
        });
    }
};

exports.getProduct = async (req, res) => {
    try {
        const products = await productRepo.displayProduct();
        res.status(200).json(products);
    } catch (err) {
        console.error("Error in displaying a particular products", err);
        res.status(400).json({
            errorcode: 400,
            errormessage: err.message
        });
    }
};

exports.getProductCategory = async (req, res) => {
    try {
        const products = await productRepo.displayProductCategory();
        res.status(200).json(products);
    } catch (err) {
        console.error("Error in displaying all product category", err);
        res.status(400).json({
            errorcode: 400,
            errormessage: err.message
        });
    }
};

exports.postProduct = async (req ,res) => {
    try {
        const products = await productRepo.newProduct();
        res.status(200).json(products);
    } catch (err) {
        console.error("Error in inserting new products", err);
        res.status(400).json({
            errorcode: 400,
            errormessage: err.message
        });
    }
};

exports.putProduct = async (req, res) => {
    try {
        const products = await productRepo.updateProduct();
        res.status(200).json(products);
    } catch (err) {
        console.error("Error in updating products", err);
        res.status(400).json({
            errorcode: 400,
            errormessage: err.message
        });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const products = await productRepo.removeProduct();
        res.status(200).json(products);
    } catch (err) {
        console.error("Error in deleting products", err);
        res.status(400).json({
            errorcode: 400,
            errormessage: err.message
        });
    }
};