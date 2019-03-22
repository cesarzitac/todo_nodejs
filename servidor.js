var express = require('express');
var app = express();
const bodyparser = require('body-parser');

//app.get("/", inicio); 
app.set('views', './src/views');
app.set('view engine', 'pug');
app.use(bodyparser.json());
//require('./connection');
// function inicio(peticion, resultado) {
// 	resultado.send("Hola mundo mundial");
// }
/*app.get('/', function(req, res) {
	res.render('index', { title: 'Hey', message: 'Hello there'});
});
*/
require('./src/routes')(app);

// app.get('/', function (req, res) {
//   res.render('index', { title: 'Hey', message: 'Hello there!'});
// });

function lugar(peticion, resultado) {
	resultado.send("en algun lugar de un gran pais");
}

app.listen(8989, ()=>console.log('express server is ready') );