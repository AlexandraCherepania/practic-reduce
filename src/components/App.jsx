import { AppBar }  from "../components/TodoList/AppBar/AppBar";
import { Layout } from "../components/TodoList/Layout/Layout";
import { TaskForm } from "./TodoList/TaskForm/TaskForm";
import { TaskList } from "../components/TodoList/TaskList/TaskList";

export const App = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};
