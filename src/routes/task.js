const express = require('express');
const router = express.Router();
const pool = require('../database');
const moment = require('moment')

router.get('/add', (req,  res) => {
    res.render('tareas/add', { task: {} });
});

router.post('/add', async (req, res) => {
    const {id, descripcion, fecha_ejecucion} = req.body;
    const newTask = {
        id,
        descripcion,
        fecha_ejecucion
    };
    if(newTask.id !== ''){
        await pool.query(`UPDATE tarea SET descripcion="${newTask.descripcion}", fecha_ejecucion="${newTask.fecha_ejecucion}" where id=?`, [newTask.id]);
    }else{
        await pool.query('INSERT INTO tarea set ?', [newTask]);
    }
    // await pool.query('INSERT INTO tarea set ?', [newTask]);
    res.redirect('/task'); 
});

router.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    pool.query('DELETE FROM tarea WHERE id=?', [id]);
    res.redirect('/task');
})

router.get('/update/:id', async (req,res) => {
    //optener id que viene por parametro
    const { id } = req.params;
    const data = await pool.query('SELECT * FROM tarea WHERE id=?', [id]);
    const tasks =  data[0];
    var task = {...tasks,fecha_ejecucion:moment(tasks.fecha_ejecucion).format('YYYY-MM-DD')};
    console.log(task);
    res.render('tareas/add.pug', { task });        
})

router.get('/', async (req,res) => {
    const tareas = await pool.query('SELECT * FROM tarea');
    console.log(tareas);
    res.render('tareas/list.pug', {tareas});
});

module.exports = router;