import axios from "axios";
const API_URL = "https://main--stately-kheer-1bf538.netlify.app/";

// Plural
export const getTaskRequest = async () =>
  await axios.get(`${API_URL}`);

export const createTaskRequest = async (task) =>
  await axios.post(`${API_URL}`, task);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`${API_URL}/${id}`);

// Singular
export const getTaskReques = async (id) =>
  await axios.get(`${API_URL}/${id}`);

export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`${API_URL}/${id}`, newFields);

export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`${API_URL}/${id}`, {
    done: done,
  });
