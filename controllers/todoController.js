const Todo = require('../models/todoModel');
const factory = require('./handlerFactory');

exports.getAllTodos = factory.getAll(Todo);
exports.getTodo = factory.getOne(Todo);
exports.createTodo = factory.createOne(Todo);
exports.updateTodo = factory.updateOne(Todo);
exports.deleteTodo = factory.deleteOne(Todo);

exports.deleteAllTodos = factory.deleteAll(Todo);
