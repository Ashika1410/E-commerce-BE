const mysql_Pool = require('../Resources/db').mysql_Pool;

exports.displayAllProducts = () => {
  return new Promise ((resolve,reject) => {
    let sqlQuery = `SELECT * FROM products;`;
    console.log(sqlQuery);
    mysql_Pool.getConnection((err,con) => {
      if (err) {
        return reject (new Error (err));
      }
      else {
        con.query(sqlQuery, (err, result) => {
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

exports.displayProduct = () => {
  return new Promise ((resolve,reject) => {
  let sqlQuery = `SELECT product_name,product_price,product_discount FROM products WHERE productID=104;`;
  mysql_Pool.getConnection((err,con) => {
    if (err) {
      return reject (new Error (err));
    }
    else {
      con.query(sqlQuery, (err,con) => {
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

exports.displayProductCategory = () => {
  return new Promise ((resolve,reject) => {
  let sqlQuery = `SELECT product_name, product_price, product_discount FROM products WHERE categoryID=202;`;
  console.log(sqlQuery);
  mysql_Pool.getConnection((err,con) => {
  if (err) {
    return reject (new Error (err));
  }
  else {
    con.query(sqlQuery, (err, result) => {
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

exports.newProduct = () => {
  return new Promise ((resolve, reject) => {
    const sqlQuery = `INSERT INTO products (productID, product_name, product_price, product_discount) VALUES (?, ?, ?, ?);`;
    const values = [108, 'Beat XP smart watch', 1099, '15%']; 
    console.log(sqlQuery);
    mysql_Pool.getConnection((err, con) => {
      if (err) {
        return reject (new Error (err));
      }
      else {
        con.query(sqlQuery, (err, result) => {
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
};
  
exports.updateProduct = (req, res) => {
  return new Promise ((resolve, reject) => {
    const sqlQuery = `UPDATE products SET categoryID=204 WHERE productID=108`;
    console.log(sqlQuery);
    mysql_Pool.getConnection((err, con) => {
      if (err) {
        return reject (new Error (err));
      }
      else {
        con.query(sqlQuery, (err, result) => {
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
};

exports.removeProduct = (req, res) => {
  return new Promise ((resolve, reject) => {
    const sqlQuery = `DELETE FROM products WHERE productID=106;`;
    console.log(sqlQuery);
    mysql_Pool.getConnection((err, con) => {
      if (err) {
        return reject (new Error (err));
      }
      else {
        con.query(sqlQuery, (err, result) => {
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
};
  