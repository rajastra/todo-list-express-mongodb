const express = require('express');

const router = express.Router();
const todoController = require('../controllers/todoController');
const authController = require('../controllers/authController');

router.use(authController.protect);
// Protect all routes after this middleware
router
  .route('/')
  .get(todoController.getAllTodos)
  .post(todoController.createTodo);

router
  .route('/:id')
  .get(todoController.getTodo)
  .patch(todoController.updateTodo)
  .delete(todoController.deleteTodo);

module.exports = router;
