import { useRecoilValue } from 'recoil';
import { todoList } from '../recoil/todo';
import './TodoList.scss';

const TodoList = () => {
    const todos = useRecoilValue(todoList);

    return (
        <div className="TodoList">
            {todos.map((v) =>
                <div key={v.id}>{v.contents}</div>
            )}
        </div>
    )
}

export default TodoList;