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
      return <h1 className="flex justify-center items-center text-white">Loading...</h1>;
    }
    return tasks.map((task) => <TaskCard key={task.id} task={task} />);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-cyan-500">Tasks</h1>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 justify-center items-center p-16">
        {renderMain()}
      </div>
    </div>
  );
};

export default TaskPage;
