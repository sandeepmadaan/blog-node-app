var express = require('express');
var router = express.Router();
const todosController = require('../server/controllers/todos');
const todoitemsController = require('../server/controllers/todoitems');

/* GET home page. */


router.post('/api/todos', todosController.createItem);
router.get('/api/todo', todosController.lists);
                      
router.get('/api/todoItems', todoitemsController.lists);

router.get('/api/todos/:todoid', todosController.retrieve);
router.put('/api/todos/:todoid', todosController.update);
router.delete('/api/todos/:todoid', todosController.destroy);
router.get('/', todosController.lists);


router.post('/quotes', todosController.createItem);


router.post('/api/todos/:todoid/items', todoitemsController.create);
router.put('/api/todos/:todoid/items/:todoitemid', todoitemsController.update);
router.delete(
    '/api/todos/:todoid/items/:todoitemid', todoitemsController.destroy
  );

module.exports = router;
 
