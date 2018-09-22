var express = require('express');
var router = express.Router();

const ToDo = require('../models/todo')

router.get('/', function(req, res, next) {
  ToDo.findAll().then((todos) => {
    res.render('index', { todos: todos })
  })
});

router.post('/', function(req, res, next) {
  const todo = ToDo.build({
    subject: req.body.subject,
    description: req.body.description,
    deadline: req.body.deadline,
  })

  todo.save().then(() => {
    ToDo.findAll().then((todos) => {
      res.redirect('/')
    })
  })
});

router.post('/delete/:id', (req, res, next) => {
  ToDo.destroy({
    where: { id: req.params.id }
  }).then(() => {
    res.redirect('/')
  })
})

module.exports = router;
