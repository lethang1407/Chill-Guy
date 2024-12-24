import { useDispatch, useSelector } from "react-redux"
import { cn } from "../../lib/utils"
import { Input } from "../ui/Input"
import { addTodoList, deleteTodoList, ToggleTodoList } from "../../redux/actions";
import { useState } from "react";
import TodoItem from "./TodoItem";
import { toast } from "react-hot-toast"
function TodoList({minimized}) {
    const { todoList } = useSelector((state) => state.todolist);
    const dispatch = useDispatch();
    const [task, setTask] = useState("");
    const handleAddTodo = (e) => {
        e.preventDefault();
        if (task.trim()) {
            const newTodo = {
                id: Date.now(),
                name: task.trim(),
            };
            toast.success("Task added successfully!");
            dispatch(addTodoList(newTodo));
            setTask("");
        }
    };

    const handleToggleComplete = (id) => {
        console.log(id);
        dispatch(ToggleTodoList(id));
    };
    const handleDeleteTodo = (id) => {
        dispatch(deleteTodoList(id));
        toast.success("Task deleted successfully!");
    };
    if (minimized) {
        return ; 
    }
    return (
        <>
            <div className={cn("px-10 py-4 overflow-y-auto scroll-smooth h-[40vh]")}>
                <h2 className={cn("text-2xl  mb-3 text-center")}>📚 TO DO LIST 📜</h2>
                <form className={cn("flex items-center")} onSubmit={handleAddTodo}    >
                    <Input type="text" placeholder="Add a task..."
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <button type="submit" className={cn("bg-green-400 px-2 py-1 rounded-md ml-2")}>ADD</button>
                </form>
                {/* <TodoListContent /> */}
                <div>
                    {todoList.map((todo) => (
                        <ul className={cn("overflow-y-auto")}>
                            <TodoItem key={todo.id}
                                todo={todo}
                                handleDeleteTodo={handleDeleteTodo}
                                handleToggleComplete={handleToggleComplete} />
                        </ul>
                    ))}
                </div>
            </div>

        </>
    )
}

export default TodoList
