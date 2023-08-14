// Importamos la conexion a la base de datos:
const pool = require("../db.js");

const getTasks = (req, res) => {
  res.send("obteniendo tareas");
};

const getTask = (req, res) => {
  res.send("obteniendo una tarea");
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
