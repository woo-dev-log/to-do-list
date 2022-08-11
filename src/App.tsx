import React from 'react';
import './App.scss';
import TodoBox from './components/TodoBox';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <TodoBox>
      <TodoList />
      <TodoInput />
    </TodoBox>
  )
}

export default App;
