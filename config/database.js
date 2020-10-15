var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'project'
});

connection.connect();

connection.query('SELECT * FROM tb_user', function(err, results, fields) {
  if (err) {
    console.log(err);
  }
  console.log(results);
});

connection.end();


// var mysql = require('mysql');
// var db_info = {
//     host: 'localhost',
//     port: '3306',
//     user: 'root',
//     password: 'root',
//     database: 'project'
// }

// module.exports = {
//     init: function () {
//         return mysql.createConnection(db_info);
//     },
//     connect: function(conn) {
//         conn.connect(function(err) {
//             if(err) console.error('mysql connection error : ' + err);
//             else console.log('mysql is connected successfully!');
//         });
//     }
// }