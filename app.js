const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: false }));

const mysql 	= require('mysql');
const dbConfig 	= require('./config/db');
const connection= mysql.createConnection(dbConfig);

const sequelize = require('./models').sequelize;
sequelize.sync();

const todoRouter = require('./routes/TodoRouter');
const groupRouter = require('./routes/GroupRouter');

app.use(todoRouter);
app.use(groupRouter);

module.exports = app;

