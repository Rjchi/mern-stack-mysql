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
    <div>
      <h1>{id ? "Edit task" : "Create Task"}</h1>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (id) {
            await updateTask(id, values);
            navigate("/")
          } else {
            await createTask(values);
            // navigate("/")
          }
          actions.resetForm();
          setTask({
            title: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>title</label>
            <input
              type="text"
              name="title"
              placeholder="title"
              onChange={handleChange}
              value={values.title}
            />

            <label>Description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="description"
              onChange={handleChange}
              value={values.description}
            ></textarea>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TaskForm;
