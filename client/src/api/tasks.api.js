import axios from "axios";
// const API_URL = "http://localhost:5000";
// const API_URL = process.env.REACT_APP_API;

// Plural
export const getTaskRequest = async () =>
  await axios.get("https://main--mysqlrn.netlify.app/tasks");

export const createTaskRequest = async (task) =>
  await axios.post("https://main--mysqlrn.netlify.app/tasks", task);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`https://main--mysqlrn.netlify.app/tasks/${id}`);

// Singular
export const getTaskReques = async (id) =>
  await axios.get(`https://main--mysqlrn.netlify.app/tasks/${id}`);

export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`https://main--mysqlrn.netlify.app/tasks/${id}`, newFields);

export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`https://main--mysqlrn.netlify.app/tasks/${id}`, {
    done: done,
  });
