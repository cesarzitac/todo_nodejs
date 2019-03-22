var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '415037',
  database : 'lista_tarea',
  insecureAuth: true
});
 
connection.connect((err)=>{
	!err ? console.log('Conexión a la base de datos correcta') : console.log("Fallo conexión a la base de datos \n Error: " + JSON.stringify(err, undefined, 2));

});
 

 
//connection.end();

module.exports = connection;
