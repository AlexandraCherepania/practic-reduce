import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import css from "../TaskForm/TaskForm.module.css";
import { addTask } from "../../../reduce/tasksSlice";



export const TaskForm = () => {

    const dispatch = useDispatch();
    
    const handleSubmit = (event) => {
        event.preventDefault();
     
        
        const form = event.target;
       
        dispatch(addTask(form.elements.text.value))
        console.log(form.elements.text.value)
        
        
        form.reset();
    }

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <input className={css.field}
                type='text'
                name="text"
                placeholder="Які у вас плани..."
            />
            <Button
                type="submit">
                Add Task
            </Button>
        </form>
        
    );
};