import Icon from "../ui/Icon"
import Board from "../ui/Board"
import ModalButton from "../ui/ModalButton"
import TodoList from "./TodoList"

function TodoListContent() {
    return (
        <Board>
            <Board.Open opens="todoList">
                <ModalButton icon={<Icon name="List" />} />
            </Board.Open>
            <Board.Window name="todoList">
                <TodoList />
            </Board.Window>
        </Board>
    )
}

export default TodoListContent
