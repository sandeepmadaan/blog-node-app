var Model = require('../models');

exports.createItem = function(req, res, next){
  Model.todos.create({ title: req.body.title})
  .then(function(item){
    res.render('quotes', { title: item.title});
  }).catch(function(error){
    next(error);
  })
}

exports.lists = function(req, res,next){
  Model.todos.findAll({ 
    include:[{
      model: Model.todo_items
    }],
  })
  .then(function(item){
    res.render('index', { item: item, blog:"Sandy's blog"});
  }).catch(function(error){
    next(error);
  })
}

exports.retrieve = function(req, res, next){
  Model.todos.findById(req.params.todoid,{
      include: [{
        model: Model.todo_items,
      }],
    })
  .then(function(todo){
    if (!todo) {
      return res.status(404).send({
        message: 'Todo Not Found',
      });
    }
    return res.status(200).send(todo);
  }).catch(function(error){
    next(error);
  })
}

exports.update= function(req, res,next) {
  Model.todos.findById(req.params.todoid, {
      include: [{
        model: Model.todo_items,
      }],
  })
  .then(todo => {
    if (!todo) {
      return res.status(404).send({
          message: 'Todo Not Found',
      });
    }
    return todo
      .update({
        title: req.body.title || todo.title,
      })
      .then(() => res.status(200).send(todo))  // Send back the updated todo.
      .catch((error) => res.status(400).send(error));
  })
  .catch((error) => res.status(400).send(error));
}

exports.destroy = function(req, res) {
  Model.todos.findById(req.params.todoid)
    .then(todo => {
      if (!todo) {
        return res.status(400).send({
          message: 'Todo Not Found',
        });
      }
      return todo
        .destroy()
        .then(() => res.status(200).send({ message: 'Todo deleted successfully.' }))
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
}