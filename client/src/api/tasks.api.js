import axios from "axios";
// const API_URL = process.env.REACT_APP_API || "http://localhost:5000/tasks";

// Plural
export const getTaskRequest = async () =>
  await axios.get(`/tasks`);

export const createTaskRequest = async (task) =>
  await axios.post(`/tasks`, task);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`/tasks/${id}`);

// Singular
export const getTaskReques = async (id) =>
  await axios.get(`/tasks/${id}`);

export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`/tasks/${id}`, newFields);

export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`/tasks/${id}`, {
    done: done,
  });
