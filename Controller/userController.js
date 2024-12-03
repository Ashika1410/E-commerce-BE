const bcrypt = require('bcrypt');
const userRepo = require('../Repoistory/users');

exports.getAllUser = async (req, res) => {
    try {
        const users = await userRepo.displayAllUsers();
        res.status(200).json(users);
    } catch (err) {
        console.error('Error in displaying all User:', err);
        res.status(400).json({
            errorcode: 400,
            errormessage: err.message
        });
    }
};

exports.getUser = async (req, res) => {
    try {
        const users = await userRepo.displayUser();
        res.status(200).json(users);
    } catch (err) {
        console.error('Error in getting particular User:', err);
        res.status(400).json({
            errorcode: 400,
            errormessage: err.message
        });
    }
};

exports.postUser = async (req, res) => {
    const { name, password, address, mobile, email } = req.body;
    console.log(req.body);
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    const result = await userRepo.createUser(name, hashedPassword, address, mobile, email);
    try {
        if (!name || !password || !address || !mobile || !email ) {
            return res.status(400).json({
                errorcode: 400,
                errormessage: "Missing required fields",
                missingFields: {
                    name: !name,
                    password: !password,
                    address: !address,
                    mobile: !mobile,
                    email: !email
                }
            });
        }
        res.status(200).json({
            message: "New User added successfully",
            note: "Password stored in the encrypted form",
            result: result
        });
    } catch (err) {
        console.error('Error in postUser:', err);
        let errorMessage = "An error occurred";
        if (err.message.includes("bcrypt")) {
            errorMessage = "Password could not be encrypted";
        }
        res.status(500).json({
            errorcode: 500,
            errormessage: errorMessage,
            error: err.message
        });
    }
};

exports.putUserPassword = async (req, res) => {
    try {
        const {newpassword} = req.body;
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(newpassword, salt);
            if (newpassword){
                const result = await userRepo.updateUser(hashedPassword);
                return res.status(201).json({
                    message:"password updated",
                    result: result
                })
            }
    } catch (err) {
        console.error('Error in updating Password:', err);
        res.status(400).json({
            error: err.message
        });
    }
};

exports.putUserDetails = async (req,res) => {
    try{
        const user = await userRepo.updateUser();
        res.status(200).json( {
            message:"Updated Successfully",
            result: user
        });
    } catch (err) {
        console.error('Error in updating User details:', err);
        res.status(400).json({
            error: err.message
        });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const users = await userRepo.removeUser();
        res.status(200).json(users);
    } catch (err) {
        console.error('Error in deleting User:', err);
        res.status(400).json({
            errorcode: 400,
            errormessage: err.message
        });
    }
};