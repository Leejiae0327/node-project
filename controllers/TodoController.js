const express = require('express');
const model = require('../models');

async function addTodo(req, res){
	const title = req.body.title;
	const group_id = parseInt(req.body.group_id);
	const done = parseInt(req.body.done);

	
	if(title){
		if(group_id){
			var count = await model.Group.count({where:{id:group_id}});
			
			if(count==0){
				res.status(400).send({error:'그룹 없음'});
				return;
			}
		}

		try {
			model.Todo.create({
				title: title,
				group_id: group_id,
				done: done
			}).then(res.status(200).send({status:'success'}));
		}catch(error){
	        res.status(500).send(error.msg);
	        return;
		}
	}else{
		res.status(400).send({error:'제목 없음'});
        return;
    }
}

function checkDone(req, res){
	const todoId = req.params.todoId;
	model.Todo.findOne({where:{id: todoId},raw:true}).then(function(result){
		
		if(result){
			
			try{
				if(result.done == '1'){
					model.Todo.update({done:0},{where:{id :todoId}}).then(res.status(200).send({status:'update 체크 해제'}));
					return;					
				}
				
				model.Todo.update({done:1},{where:{id : todoId}}).then(res.status(200).send({status:'update 체크'}));
				
			}catch(error){
				res.status(500).send(error.msg);
	        	return;
			}
		}else{
			res.status(200).send({status:"업데이트 대상이 없음"});
		}
	});

}

function showTodoList(req, res){
	try{
		model.Todo.findAll().then(function(result){
			res.status(200).send({todo:result});

		});

	}catch(error){
		res.status(500).send(error.msg);
	}
}

function showDoneList(req, res){
	try{
			model.Todo.findAll({where:{done:true}}).then(function(result){
			
			if(result.length===0){
				res.status(200).send({status:"완료된 목록 없음"});
			}else{
				res.status(200).send({todo:result});
			}
		});
	}catch(error){
		res.status(500).send(error.msg);
	}

}

exports.todoController = {
    addTodo,
    checkDone,
    showTodoList,
    showDoneList,
}
