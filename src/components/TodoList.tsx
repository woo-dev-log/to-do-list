import { useRecoilValue } from 'recoil';
import { todoList } from './atoms';
import TodoRemove from './TodoRemove';
import './TodoList.scss';

const TodoList = () => {
    const todos = useRecoilValue(todoList);
    const today = new Date();
    const dateString = today.toLocaleString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    const dayName = today.toLocaleString('ko-KR', { weekday: 'long' });

    return (
        <div className="todo-list-container">
            <div className="todo-list-head">
                <div className="todo-list-date">{dateString} {dayName}</div>
                <span className="todo-list-length">해야 할 일: {todos.length}개</span>
            </div>

            {todos.map((v) =>
                <div key={v.id} className="todo-list">
                    <span className="todo-list-contents">{v.contents}</span>
                    <TodoRemove id={v.id} />
                </div>
            )}
        </div>
    )
}

export default TodoList;