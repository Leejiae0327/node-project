var express = require('express');
var router = express.Router();
const {groupController} = require('../controllers/GroupController');

//그룹 추가
router.post('/group', groupController.addGroup);
//그룹 내 할일 추가 
router.post("/group/:groupId", groupController.addTodoInGroup);
//그룹 내 할일 보기
router.get("/group/:groupId", groupController.showTodoInGroup);
//그룹 목록 보기
router.get("/groups", groupController.showGroupList);

module.exports = router;
