var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '415037',
  database : 'lista_tarea',
  insecureAuth: true
});
 
connection.connect();
 
connection.query('INSERT INTO tarea (Descripcion,estado) VALUES ("prueba", 1) ', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
 
connection.end();	 