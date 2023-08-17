const { Router } = require("express");
const router = Router();
const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller.js");

// Rutas de las tareas
router.get("/tasks", getTasks);

router.get("/tasks/:id", getTask);

router.put("/tasks/:id", updateTask);

router.post("/tasks", createTask);

router.delete("/tasks/:id", deleteTask);

module.exports = router;
