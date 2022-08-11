import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoList, TodoType } from "./atoms";

const TodoInput = () => {
    const [test, setTest] = useState('');
    const [todos, setTodos] = useRecoilState(todoList);

    const todoAdd = () => {
        const nextId: number = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;

        const todo: TodoType = {
            id: nextId,
            contents: test
        };

        setTodos([...todos, todo]);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setTest(e.target.value);

    return (
        <>
            <input type="text" className="TodoInput" onChange={onChange} placeholder="일정을 입력하세요" />
            <button onClick={todoAdd}>입력</button>
        </>
    )
}

export default TodoInput;