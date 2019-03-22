const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
	res.render('index', { title: 'Hey', message: 'Hello there!'});
})

module.exports = router;


/*module.exports = (app) => {
	app.get('/', function (req, res) {
		var dummieModules = require('../controllers/dummie');
		dummieModules.createNewTask();
		res.render('index', { title: 'Hey', message: 'Hello there!'});
	});
}*/
