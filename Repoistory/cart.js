const mysql_Pool = require('../Resources/db').mysql_Pool;

exports.displayAllItems = () => {
    return new Promise ((resolve,reject) => {
    const sqlQuery = `SELECT * FROM cart;`;
    console.log(sqlQuery);
    mysql_Pool.getConnection((err,con) => {
        if (err) {
            return reject (new Error (err));
        }
        else {
            con.query(sqlQuery, (err,result) => {
                con.release();
                if (err) {
                    return reject (new Error (err));
                }
                else {
                    return resolve ({result:result});
                }
            });
        }
    });
    });
}

exports.displayCart = () => {
    return new Promise ((resolve,reject) => {
    const sqlQuery = `SELECT * FROM cart WHERE productID=20021;`;
    console.log(sqlQuery);
    mysql_Pool.getConnection((err,con) => {
        if (err) {
            return reject (new Error (err));
        }
        else {
            con.query(sqlQuery, (err,result) => {
                con.release();
                if (err) {
                    return reject(new Error (err));
                }
                else {
                    return resolve ({result:result});
                }
            });
        }
    });
    });
}

exports.newItem = (productID, cart_quantity, total_amount) => {
    return new Promise ((resolve,reject) => {
    const sqlQuery = `INSERT INTO cart (cart_quantity, total_amount) VALUES (?, ?);`;
    const values = [productID, cart_quantity, total_amount];
    console.log(sqlQuery);
    mysql_Pool.getConnection((err,con) => {
        if (err) {
            return reject (new Error (err));
        }
        else {
            con.query(sqlQuery, values, (err,result) => {
                con.release();
                if (err) {
                    return reject(new Error (err));
                }
                else{
                    return resolve ({result:result});
                }
            });
        }
    });
    });
}

exports.updateItem = () => {
    return new Promise ((resolve,reject) => {
    const sqlQuery = `UPDATE cart SET  WHERE productID=23423;`;
    console.log(sqlQuery);
    mysql_Pool.getConnection((err,con) => {
        if (err) {
            return reject (new Error (err));
        }
        else {
            con.query(sqlQuery, (err,result) => {
                con.release();
                if (err){
                    return reject(new Error (err));
                }
                else {
                    return resolve ({result:result});
                }
            });
        }
    });
    });
}

exports.removeItem = () => {
    return new Promise ((resolve,reject) => {
    const sqlQuery = `DELETE FROM cart WHERE productID=20021;`;
    console.log(sqlQuery);
    mysql_Pool.getConnection((err, con) => {
        if (err) {
            return reject (new Error (err));
        }
        else {
            con.query(sqlQuery, (err,result) => {
                con.release();
                if (err) {
                    return reject(new Error (err));
                }
                else {
                    return resolve ({result:result});
                }
            });
        }
    });
    });
}