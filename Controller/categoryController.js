const categoryRepo = require('../Repoistory/category');

exports.getAllCategories = async (req, res) => {
    try {
        const orders = await categoryRepo.displayAllCategory();
        res.status(200).json(orders);
    } catch (err) {
        console.error("Error in displaying all category", err);
        res.status(400).json({
            errorcode: 400,
            errormessage: err.message
        });
    }
};

exports.getCategory = async (req, res) => {
    try {
        const orders = await categoryRepo.displayCategory();
        res.status(200).json(orders);
    } catch (err) {
        console.error("Error in displaying particular category", err);
        res.status(400).json({
            errorcode: 400,
            errormessage: err.message
        });
    }
};

exports.postCategory = async (req ,res) => {
    try {
        const orders = await categoryRepo.newCategory();
        res.status(200).json(orders);
    } catch (err) {
        console.error("Error in inserting new category", err);
        res.status(400).json({
            errorcode: 400,
            errormessage: err.message
        });
    }
};

exports.putCategory = async (req, res) => {
    try {
        const orders = await categoryRepo.updateCategory();
        res.status(200).json(orders);
    } catch (err) {
        console.error("Error in updating category", err);
        res.status(400).json({
            errorcode: 400,
            errormessage: err.message
        });
    }
};

exports.deleteCategory = async (req, res) => {
    try {
        const orders = await categoryRepo.removeCategory();
        res.status(200).json(orders);
    } catch (err) {
        console.error("Error in deleting category", err);
        res.status(400).json({
            errorcode: 400,
            errormessage: err.message
        });
    }
};