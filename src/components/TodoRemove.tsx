import { MdRemoveCircleOutline } from "react-icons/md";
import { useRecoilState } from "recoil";
import { todoList } from "./atoms";
import './TodoRemove.scss';

type todoId = {
    id: number
}

const TodoRemove = ({id}: todoId) => {
    const [todos, setTodos] = useRecoilState(todoList);

    const remove = (id: number) => setTodos(todos.filter(v => v.id !== id));

    return (
        <MdRemoveCircleOutline className="remove-btn" onClick={() => remove(id)}/>
    )
}

export default TodoRemove;