import { deleteTaskRequest } from "../api/tasks.api";
import { useNavigate } from "react-router-dom"

const TaskCard = ({ task }) => {
    const navigate = useNavigate()

  const handleDelete = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
      if (response.status === 204) {
        navigate(0)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>{task.id}</h2>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done === 1 ? "DONE" : "X"}</span>
      <span>{task.createAt}</span>
      <button onClick={() => handleDelete(task.id)}>Delete</button>
      <button>Edit</button>
    </div>
  );
};

export default TaskCard;
