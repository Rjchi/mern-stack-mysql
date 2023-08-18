import axios from "axios";
// const API_URL = "https://mysqlrn.netlify.app";
const API_URL = process.env.REACT_APP_API;

// Plural
export const getTaskRequest = async () =>
  await axios.get(`${API_URL}/tasks`);

export const createTaskRequest = async (task) =>
  await axios.post(`${API_URL}/tasks`, task);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`${API_URL}/tasks/${id}`);

// Singular
export const getTaskReques = async (id) =>
  await axios.get(`${API_URL}/tasks/${id}`);

export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`${API_URL}/tasks/${id}`, newFields);

export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`${API_URL}/tasks/${id}`, {
    done: done,
  });
