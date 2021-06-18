const express = require('express');
const model = require('../models');

async function addGroup(req, res){
	const name = req.body.group_name;
	if(name){
		var count = await model.Group.count({where:{group_name: name}});

		if(count != 0){
			res.status(200).send({status:'존재하는 그룹 명입니다'});
			return;
		}

        try {
			model.Group.create({
				group_name: name
			}).then(res.status(200).send({status:'success'}));
		}catch(error){
	        res.status(500).send(error.msg);
	        return;
		}
	}else{
		res.status(400).send({error:'인자 누락'});
        return;
    }
}

async function addTodoInGroup(req,res){
	const groupId = req.params.groupId;
	const title = req.body.title;
	const group_id = groupId;
	const done = parseInt(req.body.done);

	if(title){
		if(group_id){
			var count = await model.Group.count({where:{id:group_id}});
			
			if(count==0){
				res.status(400).send({error:'없는 그룹'});
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
		res.status(400).send({error:'인자 누락'});
        return;
    }
}

function showTodoInGroup(req,res){
	const groupId = req.params.groupId;

	model.Todo.findAll({where:{group_id: groupId},raw:true}).then(function(result){
		if(result.length != 0 ){
			res.status(200).send({todo_in_group:result});
			return;
		}else{
			res.status(200).send({status:"그룹에 해당하는 todo가 없습니다"});
			return;
		}
	})
}

function showGroupList(req, res){
	try{
		model.Group.findAll().then(function(result){
			res.status(200).send({group:result});

		});

	}catch(error){
		res.status(500).send(error.msg);
	}
}


exports.groupController = {
    addGroup,
    addTodoInGroup,
    showTodoInGroup,
	showGroupList
}
