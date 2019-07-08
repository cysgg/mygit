var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost_3306',
  user     : 'root',
  password : '123456',
  database : 'py_music'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) return err;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();