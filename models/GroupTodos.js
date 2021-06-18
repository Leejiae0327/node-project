module.exports = (sequelize, DataTypes) =>{
	return sequelize.define('todo_groups',{	
		id:{
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
			type: DataTypes.INTEGER
		},
		group_name:{
			type: DataTypes.STRING(30),
			allowNull: false
		}

	},{
		timestamps: false
	});
};