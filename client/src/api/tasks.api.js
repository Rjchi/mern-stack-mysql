import axios from "axios";

export const getTaskRequest = async () =>
    await axios.get("http://localhost:5000/tasks")

export const createTaskRequest = async (task) =>
    await axios.post("http://localhost:5000/tasks", task);