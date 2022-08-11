import React from 'react';
import { useRecoilState } from 'recoil';
import { todoList } from './atoms';
import './TodoList.scss';

const TodoList = () => {
    const [todos, setTodos] = useRecoilState(todoList);

    const remove = (id: number) => setTodos(todos.filter(v => v.id !== id));

    return (
        <div className="TodoList">
            {todos.map((v) =>
                <div key={v.id}>
                    <button onClick={() => remove(v.id)}>삭제</button>
                </div>
            )}
        </div>
    )
}

export default TodoList;