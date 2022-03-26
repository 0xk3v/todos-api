const asyncHandler = require("express-async-handler");

const Goals = require("../models/goalModel");

// @desc GET todos
// @route /api/todos
// @access Private

const getTodos = asyncHandler(async (req, res) => {
  const goals = await Goals.find();
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
  const goal = await Goals.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
});

// @desc PUT todos
// @route /api/todos/:id
// @access Private

const updateTodos = asyncHandler(async (req, res) => {
  const goal = await Goals.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Todo Not Found");
  }

  const updatedGoal = await Goals.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

// @desc DELETE todos
// @route /api/todos/:id
// @access Private

const deleteTodos = asyncHandler(async (req, res) => {
  const goal = await Goals.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Todo Not Found");
  }

  await goal.remove();

  res.status(200).json(req.params.id);
});

module.exports = {
  getTodos,
  setTodos,
  updateTodos,
  deleteTodos,
};
