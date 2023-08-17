import { useTasks } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

const TaskCard = ({ task }) => {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();
  const handleDone = async (id) => {
    await toggleTaskDone(id);
  };

  return (
    <div className={`${task.done === 1 ? 'bg-slate-900' : "bg-cyan-800"} p-10 m-3 rounded-md flex flex-col items-center justify-center gap-3`}>
      <h2 className="font-bold text-white text-2xl bg-black rounded-full p-3">
        {task.id}
      </h2>
      <h2 className={`${task.done === 1 ? "bg-green-600" : "bg-red-500"} rounded-full p-2 shadow-md shadow-black text-base`}>
        {task.title}
      </h2>
      <p className={`${task.done === 1 ? "bg-green-700" : "bg-red-700"} rounded-full p-2 shadow-md shadow-black text-base`}>
        {task.description}
      </p>
      {/* <span className="bg-white rounded-full p-2 shadow-md shadow-black text-bas">
        {task.createAt}
      </span> */}
      <span className="border-2 bg-black p-2">
        {task.done === 1 ? "✅" : "❌"}
      </span>
      <div className="grid grid-cols-3 bg-cyan-950 rounded-md p-2 font-bold text-black">
        <button className="bg-lime-600 rounded-2xl px-4 py-1 shadow-md shadow-black font-bold hover:bg-black transition ease-linear hover:text-white" onClick={() => handleDone(task.id)}>Done?</button>
        <button className="bg-purple-700 rounded-2xl px-4 py-1 shadow-md shadow-black font-bold hover:bg-black transition ease-linear hover:text-white" onClick={() => deleteTask(task.id)}>Delete</button>
        <button className="bg-yellow-400 rounded-2xl px-4 py-1 shadow-md shadow-black font-bold hover:bg-black transition ease-linear hover:text-white" onClick={() => navigate(`/edit/${task.id}`)}>Edit</button>
      </div>
    </div>
  );
};

export default TaskCard;
