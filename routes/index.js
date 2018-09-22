var express = require('express');
var router = express.Router();

const ToDo = require('../models/todo')

/* GET home page. */
router.get('/', function(req, res, next) {
  ToDo.findAll().then((todos) => {
    console.log(`ToDo: ${todos.length}`)
    res.render('index', { title: 'Express' });
  })
});

module.exports = router;
