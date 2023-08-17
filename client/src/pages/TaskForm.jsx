import { Form, Formik } from "formik";
// Utilizamos una libreria para validar y crear formularios
// Formik --> va a mantener el estado
// Form --> es como tal el formulario
import { useTasks } from "../context/TaskContext";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const TaskForm = () => {
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const { id } = useParams();

  useEffect(() => {
    const loadTask = async () => {
      if (id) {
        const response = await getTask(id);
        setTask({
          title: response.title,
          description: response.description,
        });
      }
    };
    loadTask();
  }, [id, getTask]);

  return (
    <div className="flex flex-col items-center justify-center py-11">
      <h1 className="text-cyan-500">{id ? "Edit task" : "Create Task"}</h1>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (id) {
            await updateTask(id, values);
            navigate("/")
          } else {
            await createTask(values);
            navigate("/")
          }
          actions.resetForm();
          setTask({
            title: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form className="bg-gradient-to-r from-sky-500 to-indigo-500 flex flex-col justify-center items-center p-6 gap-3 rounded-md shadow-md shadow-black hover:translate-y-6 ease-linear" onSubmit={handleSubmit}>
            <label className="font-bold text-white">Title</label>
            <input
              className="text-center rounded-md outline-none h-8 shadow-md shadow-black focus:bg-black focus:text-white"
              type="text"
              name="title"
              placeholder="title"
              onChange={handleChange}
              value={values.title}
            />

            <label className="font-bold text-white">Description</label>
            <textarea
              className="text-center rounded-md outline-none h-16 w-72 shadow-md shadow-black focus:bg-black focus:text-white py-3"
              name="description"
              rows="3"
              onChange={handleChange}
              value={values.description}
            ></textarea>

            <button className="bg-amber-50 rounded-2xl p-3 shadow-md shadow-black font-bold hover:bg-black transition ease-linear hover:text-white" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TaskForm;
