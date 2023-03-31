
import { useDispatch } from "react-redux";
import { FiDelete } from "react-icons/fi";
import { deleteTask, toggleCompleted } from "../../../reduce/tasksSlice";

import css from "../Task/Task.module.css";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleToggle}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <FiDelete size={24} />
      </button>
    </div>
  );
};