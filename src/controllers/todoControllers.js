const asyncHandler = require("express-async-handler");

// @desc GET todos
// @route /api/todos
// @access Private

const getTodos = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Todos" });
});

// @desc POST todos
// @route /api/todos
// @access Private

const setTodos = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set Todos" });
});

// @desc PUT todos
// @route /api/todos/:id
// @access Private

const updateTodos = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Todo ${req.params.id}` });
});

// @desc DELETE todos
// @route /api/todos/:id
// @access Private

const deleteTodos = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Todo ${req.params.id}` });
});

module.exports = {
  getTodos,
  setTodos,
  updateTodos,
  deleteTodos,
};
