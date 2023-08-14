// Importamos la conexion a la base de datos:
const pool = require("../db.js");

const getTasks = async (req, res) => {
  const [result] = await pool.query(
    "SELECT * FROM tasks ORDER BY createAt ASC"
  );
  res.json(result);
};

const getTask = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [
    req.params.id,
  ]);

  if (result.length === 0)
    return res.status(404).json({ message: "Task not found" });

  res.json(result[0]);
};

const createTask = async (req, res) => {
  const { title, description } = req.body;
  const [result] = await pool.query(
    "INSERT INTO tasks(title, description) VALUES (?, ?)",
    [title, description]
  );
  res.json({
    id: result.insertId,
    title,
    description,
  });
};

const updateTask = (req, res) => {
  res.send("actualizando tareas");
};

const deleteTask = (req, res) => {
  res.send("eliminando tareas");
};

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
