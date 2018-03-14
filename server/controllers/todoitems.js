var Model = require('../models');

exports.create = function(req, res, next) {
     Model.todo_items.create({
        name: req.body.name,
        todo_id: req.params.todoid,
    })
    .then(function(todo_items){
        res.send(todo_items);
    }).catch(function(error){
        next(error);
    })
}

exports.lists = function(req, res,next){
    Model.todo_items.findAll({ where :{id: 1},
      include:[{
        model: Model.todos
      }],
    })
    .then(function(item){
      res.send(item);
    }).catch(function(error){
      next(error);
    })
  }

exports.update = function(req, res) {
    Model.todo_items.find({
          where: {
            id: req.params.todoitemid,
            todo_id: req.params.todoid,
          },
        })
      .then(todo_item => {
        if (!todo_item) {
          return res.status(404).send({
            message: 'TodoItem Not Found',
          });
        }
  
        return todo_item
          .update({
            name: req.body.name || todo_item.name,
          })
          .then(todo_item => res.status(200).send(todo_item))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
  
exports.destroy = function(req, res) {
  Model.todo_items.find({
          where: {
            id: req.params.todoitemid,
            todo_id: req.params.todoid,
          },
        })
      .then(todo_item => {
        if (!todo_item) {
          return res.status(404).send({
            message: 'TodoItem Not Found',
          });
        }
  
        return todo_item
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }