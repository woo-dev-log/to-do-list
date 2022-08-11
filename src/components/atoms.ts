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
            contents: '깃허브 잔디 심기',
        },

        {
            id: 2,
            contents: '우영우 챙겨보기',
        },

        {
            id: 3,
            contents: '취업 하기!',
        }
    ],
});