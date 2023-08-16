import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";

import TaskCard from "../components/TaskCard";

const TaskPage = () => {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

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
