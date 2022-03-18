// @desc GET todos
// @route /api/todos
// @access Private

const getTodos = (req, res) => {
  res.status(200).json({ message: "Get Todos" });
};

// @desc POST todos
// @route /api/todos
// @access Private

const setTodos = (req, res) => {
  res.status(200).json({ message: "Set Todos" });
};

// @desc PUT todos
// @route /api/todos/:id
// @access Private

const updateTodos = (req, res) => {
  res.status(200).json({ message: `Update Todo ${req.params.id}` });
};

// @desc DELETE todos
// @route /api/todos/:id
// @access Private

const deleteTodos = (req, res) => {
  res.status(200).json({ message: `Delete Todo ${req.params.id}` });
};

module.exports = {
  getTodos,
  setTodos,
  updateTodos,
  deleteTodos,
};
