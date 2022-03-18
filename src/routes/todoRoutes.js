const express = require("express");
const router = express.Router();
const {
  getTodos,
  updateTodos,
  setTodos,
  deleteTodos,
} = require("../controllers/todoControllers");

router.get("/", getTodos);
router.post("/", setTodos);
router.put("/:id", updateTodos);
router.delete("/:id", deleteTodos);

module.exports = router;
