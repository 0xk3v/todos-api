// File that holds The Todo Routes...

const express = require("express");
const router = express.Router();
const {
  getTodos,
  updateTodos,
  setTodos,
  deleteTodos,
} = require("../controllers/todoControllers");

router.route("/").get(getTodos).post(setTodos);
router.route("/:id").put(updateTodos).delete(deleteTodos);

module.exports = router;
