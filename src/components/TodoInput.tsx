import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { useRecoilState } from "recoil";
import { todoList, TodoType } from "./atoms";
import './TodoInput.scss';

const TodoInput = () => {
    const [text, setText] = useState('');
    const [todos, setTodos] = useRecoilState(todoList);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);

    const todoAdd = () => {
        if (!text) return;

        const todo: TodoType = {
            id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
            contents: text
        };

        setTodos([...todos, todo]);
        setText('');
    };

    return (
        <div className="todo-input-container">
            <input type="text" value={text} className="todo-input" onChange={onChange} placeholder="일정을 입력하세요" />
            <MdAdd className="todo-add" onClick={todoAdd} />
        </div>
    )
}

export default TodoInput;