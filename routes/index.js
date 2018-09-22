var express = require('express');
var router = express.Router();

const Task = require('../models/task')

router.get('/', function(req, res, next) {
  Task.findAll().then((tasks) => {
    res.render('index', { tasks: tasks })
  })
});

router.post('/', function(req, res, next) {
  const task = Task.build({
    subject: req.body.subject,
    description: req.body.description,
    deadline: req.body.deadline,
  })

  task.save().then(() => {
    Task.findAll().then((tasks) => {
      res.redirect('/')
    })
  })
});

router.post('/delete/:id', (req, res, next) => {
  Task.destroy({
    where: { id: req.params.id }
  }).then(() => {
    res.redirect('/')
  })
})

module.exports = router;
