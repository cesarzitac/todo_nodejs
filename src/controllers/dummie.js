var conection = require('../models/connection');
module.exports = {
	createNewTask
};

function createNewTask(descripcion, fecha) {
	conection.query('INSERT INTO tarea (Descripcion,estado) VALUES ("prueba", 1) ', function (error, results, fields) {
	  if (error) throw error;
  	console.log(results);
	});
}
