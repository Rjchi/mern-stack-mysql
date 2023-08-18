import axios from "axios";
// const API_URL = process.env.REACT_APP_API || "http://localhost:5000/tasks";

// Plural
export const getTaskRequest = async () =>
  await axios.get(`http://localhost:5000/tasks`);

export const createTaskRequest = async (task) =>
  await axios.post(`http://localhost:5000/tasks`, task);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`http://localhost:5000/tasks/${id}`);

// Singular
export const getTaskReques = async (id) =>
  await axios.get(`http://localhost:5000/tasks/${id}`);

export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`http://localhost:5000/tasks/${id}`, newFields);

export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`http://localhost:5000/tasks/${id}`, {
    done: done,
  });
