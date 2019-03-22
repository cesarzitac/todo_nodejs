const express = require('express');
const morgan = require('morgan');
const pug = require('pug');
const path = require('path');

//initializations
const app = express();

//settings
app.set('port', 4000);
app.set('views', path.join(__dirname, 'views'));
/* app.engine('.pug', pug({
	defaultLayout: 'main',
	layoutDir: path.join(app.get('views') , 'layouts'),
	partialsDir: path.join(app.get('views') , 'partials'),
	extname: '.pug',
})); */

app.set('view engine', 'pug');


//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));

//global variables
app.use((req, res, next) => {
	next();
});
 
//routes
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/task', require('./routes/task'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bootstrap', express.static(__dirname + '/../node_modules/bootstrap/dist/css/'));
app.use('/bootstrap_date', express.static(__dirname + '/../node_modules/bootstrap-datetime-picker'));
app.use('/jquery', express.static(__dirname + '/../node_modules/jquery/dist/jquery.min.js'));
app.use('/popper', express.static(__dirname + '/../node_modules/popper.js/dist/umd/popper.js'));
app.use('/font', express.static(__dirname + '/../node_modules/font-awesome/'));
app.use('/timeago', express.static(__dirname + '/../node_modules/timeago.js/dist/timeago.min.js'))
app.use('/moment', express.static(__dirname + '/../node_modules/moment/moment.js'))
app.use('/moment-timezone', express.static(__dirname + '/../node_modules/moment-timezone/moment-timezone.js'))


//public
app.use(express.static(path.join(__dirname, 'public')));

//starting server
app.listen(app.get('port'), () => {
	console.log('Servidor en puerto ' + app.get('port'));
});