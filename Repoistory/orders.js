const mysql_Pool = require('../Resources/db').mysql_Pool;

exports.displayAllOrders = () => {
    return new Promise ((resolve,reject) => {
    const sqlQuery = `SELECT * FROM orders;`;
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

exports.displayOrder = () => {
    return new Promise ((resolve,reject) => {
    const sqlQuery = `SELECT * FROM orders WHERE orderID=20021;`;
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

exports.newOrders = (details, amount, count, orderdate, deliverydate) => {
    return new Promise ((resolve,reject) => {
    const sqlQuery = `INSERT INTO orders (order_details, total_amount, item_count, Date_of_order, Date_of_delivery) VALUES (?, ?, ?, ?, ?);`;
    const values = [details, amount, count, orderdate, deliverydate];
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

exports.updateOrder = () => {
    return new Promise ((resolve,reject) => {
    const sqlQuery = `UPDATE orders SET item_count=1, Date_of_order='2024-08-01', Date_of_delivery='2024-08-09' WHERE orderID=23423;`;
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

exports.removeOrder = () => {
    return new Promise ((resolve,reject) => {
    const sqlQuery = `DELETE FROM orders WHERE orderID=20021;`;
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