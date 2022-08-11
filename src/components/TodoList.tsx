import { useRecoilValue } from 'recoil';
import { todoList } from './atoms';
import TodoRemove from './TodoRemove';
import './TodoList.scss';

const TodoList = () => {
    const todos = useRecoilValue(todoList);

    return (
        <div className='todo-list-container'>
            {todos.map((v) =>
                <div key={v.id} className="todo-list">
                    {v.contents}
                    <TodoRemove id={v.id} />
                </div>
            )}
        </div>
    )
}

export default TodoList;