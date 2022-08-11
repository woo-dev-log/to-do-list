import React from "react";
import './TodoBox.scss';

type Props = {
    children: React.ReactNode;
}

const TodoBox = ({ children }: Props) => {
    return <div className='todo-box'>{children}</div>
}

export default TodoBox;