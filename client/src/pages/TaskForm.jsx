import { Form, Formik } from "formik";
// Utilizamos una libreria para validar y crear formularios
// Formik --> va a mantener el estado
// Form --> es como tal el formulario
import { createTaskRequest } from "../api/tasks.api";

const TaskForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={async (values, actions) => {
          try {
            const response = await createTaskRequest(values);
            console.log(response)
            actions.resetForm()
          } catch (error) {
            console.log(error);
          }
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