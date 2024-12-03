const mysql = require('mysql2');

const mysql_Pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'ecommerce_db',
    port : 3306,
    ssl : false
});

module.exports = {mysql_Pool};