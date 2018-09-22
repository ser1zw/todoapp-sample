var express = require('express');
var router = express.Router();

const ToDo = require('../models/todo')

/* GET home page. */
router.get('/', function(req, res, next) {
  ToDo.findAll().then((todos) => {
    res.render('index', { todos: todos })
  })
});

router.post('/', function(req, res, next) {
  const body = req.body
  const todo = ToDo.build({
    subject: req.body.subject,
    description: req.body.description,
    deadline: req.body.deadline,
  })

  todo.save().then(() => {
    ToDo.findAll().then((todos) => {
      res.render('index', { todos: todos })
    })
  })
});

module.exports = router;
