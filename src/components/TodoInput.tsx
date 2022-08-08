import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoList, TodoType } from "../recoil/todo";

const TodoInput = () => {
    const [test, setTest] = useState('');
    const todos = useRecoilValue(todoList);
    const setTodo = useSetRecoilState(todoList);

    const todoAdd = () => {
        const nextId: number = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;

        const todo: TodoType = {
            id: nextId,
            contents: test
        };

        setTodo([...todos, todo]);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setTest(e.target.value);

    return (
        <>
            <input type="text" className="TodoInput" onChange={onChange} placeholder="test" />
            <button onClick={todoAdd}>입력</button>
        </>
    )
}

export default TodoInput;