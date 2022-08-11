import { atom } from "recoil";

export interface TodoType {
    id: number;
    contents: string;
}

export const todoList = atom<TodoType[]>({
    key: 'todos',

    default: [
        {
            id: 1,
            contents: 'Todo List를',
        },

        {
            id: 2,
            contents: '자유롭게',
        },

        {
            id: 3,
            contents: '추가해보세요!',
        }
    ],
});