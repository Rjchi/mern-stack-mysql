import { useEffect, useState } from "react";
import { getTaskRequest } from "../api/tasks.api";
import TaskCard from "../components/TaskCard";

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      const response = await getTaskRequest();
      setTasks(response.data);
    };

    loadTasks();
  }, []);

  const renderMain = () => {
    if (tasks.length === 0) {
      return <h1>Loading...</h1>
    }
    return tasks.map((task) => <TaskCard key={task.id} task={task} />);
  };

  return (
    <div>
      <h1>Tasks</h1>
      {renderMain()}
    </div>
  );
};

export default TaskPage;
