const mysql = require('mysql');
const {promisify} = require('util');
const { database } = require('./keys');
const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Conexión con base de datos cerrada');
        }
        if(err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Se excedio el limite de conexiones para la base de datos');
        }
        if(err.code === 'ECONNREFUSED') {
            console.error('Conexión a base de datos rechazada');           
        }
    }
    if(connection) connection.release();
    console.log('BD conectada');
    return;
});
pool.query = promisify(pool.query);

module.exports = pool;
