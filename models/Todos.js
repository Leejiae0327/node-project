module.exports = (sequelize, DataTypes) =>{
	return sequelize.define('todos',{
		id:{
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
			type: DataTypes.INTEGER
		},	
		title:{
			type: DataTypes.STRING(30),
			allowNull: false,
		},
		group_id:{
			type: DataTypes.INTEGER,
			defaultValue: null,
			allowNull: true,
		},
		done: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
			allowNull: false,
		}
	},{
		timestamps: false,
	});
};