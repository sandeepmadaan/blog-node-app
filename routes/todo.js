var router = express.Router();
var todo = require('../server/controllers/todos');

router.post('/api/todo', function (req, res, next) {
    todo.createItem(req, res, next, function (result) {
            res.send({ todocontent: result })
    });
});

module.exports = router;