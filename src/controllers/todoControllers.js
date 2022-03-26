const asyncHandler = require("express-async-handler");

const Todos = require("../models/goalModel");

// @desc GET todos
// @route /api/todos
// @access Private

const getTodos = asyncHandler(async (req, res) => {
  const goals = await Todos.find();
  res.status(200).json(goals);
});

// @desc POST todos
// @route /api/todos
// @access Private

const setTodos = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const todo = await Todos.create({
    text: req.body.text,
  });
  res.status(200).json(todo);
});

// @desc PUT todos
// @route /api/todos/:id
// @access Private

const updateTodos = asyncHandler(async (req, res) => {
  const todo = await Todos.findById(req.params.id);

  if (!todo) {
    res.status(400);
    throw new Error("Todo Not Found");
  }

  const updatedTodo = await Todos.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedTodo);
});

// @desc DELETE todos
// @route /api/todos/:id
// @access Private

const deleteTodos = asyncHandler(async (req, res) => {
  const todo = await Todos.findById(req.params.id);

  if (!todo) {
    res.status(400);
    throw new Error("Todo Not Found");
  }

  await todo.remove();

  res.status(200).json(req.params.id);
});

module.exports = {
  getTodos,
  setTodos,
  updateTodos,
  deleteTodos,
};
