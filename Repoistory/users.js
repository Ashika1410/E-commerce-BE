const mysql_Pool = require('../Resources/db').mysql_Pool;

exports.displayAllUsers = () => {
  return new Promise((resolve, reject) => {
  const sqlQuery = `SELECT * FROM users;`;
  console.log(sqlQuery);
  mysql_Pool.getConnection((err,con) => {
    if(err){
        return reject(new Error(err));
    }
    else{
        con.query(sqlQuery,(err,result) => {
            con.release();
            if(err){
                return reject(new Error(err));
            }
            else{
                return resolve({result:result});
            }
        });
    }
  });
  });
}

exports.displayUser = () => {
  return new Promise((resolve, reject) => {
  const sqlQuery = `SELECT * FROM users WHERE userID=24356;`;
  console.log(sqlQuery);
  mysql_Pool.getConnection((err,con) => {
    if(err){
        return reject(new Error(err));
    }
    else{
        con.query(sqlQuery,(err,result) => {
            con.release();
            if(err){
                return reject(new Error(err));
            }
            else{
                return resolve({result:result});
            }
        });
    }
  });
  });
}

exports.createUser = (name, hashedPassword, address, mobile, email) => {
  return new Promise((resolve, reject) => {
    const sqlQuery = `INSERT INTO users (user_name, password, address, mobile, email) VALUES (?, ?, ?, ?, ?);`;
    const values = [name, hashedPassword, address, mobile, email];
    console.log('SQL Query:', sqlQuery);
    mysql_Pool.getConnection((err, con) => {
      if (err) {
        return reject(new Error("Connection error"));
      } 
      else {
        con.query(sqlQuery, values, (err, result) => {
        con.release();
          if (err) {
            return reject(new Error(err));
          } 
          else {
            return resolve({result:result});
          }
      });
      }
    });
  });
};

exports.updateUser = (hashedPassword) => {
  return new Promise((resolve,reject) => {
    const sqlQuery = `UPDATE users SET user_name='Renu' WHERE userId=1 `;
    const value = [hashedPassword];
    console.log(sqlQuery);
    mysql_Pool.getConnection((err, con) => {
      if (err) {
       return reject(new Error(err));
      } else {
        con.query(sqlQuery, value, (err, result) => {
        con.release();
          if (err) {
            return reject(new Error(err));
          } else {
            return resolve({result:result});
          }
        });
      }
    });
    });
  };

exports.removeUser = () => {
  return new Promise((resolve, reject) => {
  const sqlQuery = `DELETE FROM users WHERE userID=1;`;
  console.log(sqlQuery);
  mysql_Pool.getConnection((err,con) => {
    if(err){
      return reject(new Error(err));
    }
    else{
      con.query(sqlQuery,(err,result) => {
      con.release();
        if(err){
          return reject(new Error(err));
        }
        else{
          return resolve({result:result});
        }
    });
    }
  });
});
}
