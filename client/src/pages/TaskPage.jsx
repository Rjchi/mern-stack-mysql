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

  return (
    <div>
      <h1>Tasks</h1>
      {
        tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))
      }
    </div>
  );
};

export default TaskPage;
