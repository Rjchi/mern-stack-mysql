const getTasks = (req, res) => {
    res.send("obteniendo tareas");
}

const getTask = (req, res) => {
    res.send("obteniendo una tarea");
}

const createTask = (req, res) => {
    res.send("creando tareas");
}

const updateTask = (req, res) => {
    res.send("actualizando tareas");
}

const deleteTask = (req, res) => {
    res.send("eliminando tareas");
}

module.exports = {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
};