import {
  getTaskRequest,
  deleteTaskRequest,
  createTaskRequest,
  getTaskReques,
  updateTaskRequest,
  toggleTaskDoneRequest
} from "../api/tasks.api";

// Este componente es para manejar el estado de la aplicación
import { createContext, useContext, useState } from "react";

// Este es el que voy a utilizar para comunicarme con lo de abajo(el contexto)
export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const response = await getTaskRequest();
    setTasks(response.data);
  };

  const deleteTask = async (id) => {
    try {
      await deleteTaskRequest(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (task) => {
    try {
      await createTaskRequest(task);
      // setTasks({...tasks, response.data});
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (id, newFields) => {
    try {
      await updateTaskRequest(id, newFields);
    } catch (error) {
      console.log(error);
    }
  };

  const getTask = async (id) => {
    try {
      const response = await getTaskReques(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTaskDone = async (id) => {
    try {
      const taskFound = tasks.find((task) => task.id === id);
      await toggleTaskDoneRequest(id, taskFound.done === 0 ? true : false);
    } catch (error) {
      console.log(error)
    }
  };

  // Exportamos:
  return (
    <TaskContext.Provider
      value={{
        tasks,
        loadTasks,
        deleteTask,
        createTask,
        getTask,
        updateTask,
        toggleTaskDone,
      }}
    >
      {children ?? children}
    </TaskContext.Provider>
  );
};

// Creamos nuestro propio hook
export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskContextProvider");
  }
  return context;
};
