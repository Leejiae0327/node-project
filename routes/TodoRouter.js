var express = require('express');
var router = express.Router();
var {todoController} = require('../controllers/TodoController');

//할일 추가
router.post('/todo', todoController.addTodo);

//할일 체크
router.put("/todo/:todoId", todoController.checkDone);

//전체 할일 보기
router.get("/todos", todoController.showTodoList);

//완료된 할일 보기
router.get("/todo-done", todoController.showDoneList);

module.exports = router;