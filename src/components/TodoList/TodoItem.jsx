import { cn } from "../../lib/utils"
import Icon from "../ui/Icon"

function TodoItem({ todo,handleToggleComplete ,handleDeleteTodo}) {
    return (
            <li className={cn("flex items-center my-1")} key={todo.id}>
                <button 
                className={cn("mr-2 text-lg focus:outline-none flex items-center")} 
                onClick={() => handleToggleComplete(todo.id)}>
                     {todo.completed ? (
                    <Icon className={cn("text-green-500 !filter-none")} name="Check-off" />
                ) : (
                    <Icon className={cn("text-white !filter-none")} name="Check-on" />
                )}
                        <span className={cn(todo.completed && "line-through","ml-2")}>{todo.name}</span>
                </button>   
                <button className={cn("ml-auto")} onClick={() => handleDeleteTodo(todo.id)}><Icon className={cn("text-red-500 !filter-none")} name="Trash" /></button>
            </li>
    )
}

export default TodoItem
