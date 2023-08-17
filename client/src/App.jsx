import { Route, Routes } from "react-router-dom";
import { TaskContextProvider } from "./context/TaskContext";

import Navbar from "./components/Navbar";

import TaskPage from "./pages/TaskPage";
import TaskForm from "./pages/TaskForm";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="bg-zinc-900">
      <TaskContextProvider>
        <Navbar />

        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<TaskPage />} />
            <Route path="/new" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </TaskContextProvider>
    </div>
  );
}

export default App;
