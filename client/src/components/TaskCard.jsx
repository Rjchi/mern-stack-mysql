import { useTasks } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

const TaskCard = ({ task }) => {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate()
  const handleDone = async (id) => {
    await toggleTaskDone(id)
  }

  return (
    <div>
      <h2>{task.id}</h2>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.createAt}</span>
      <span>{task.done === 1 ? "DONE" : "X"}</span>
      <button onClick={() => handleDone(task.id)}>Toggle Taks</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button onClick={() => navigate(`/edit/${task.id}`)}>Edit</button>
    </div>
  );
};

export default TaskCard;
