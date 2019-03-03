import React from 'react';

const Todo = ({ todo, index, completeTodo }) => {
  return (
    <li className="todo">
      <h3 style={{textDecoration: todo.isCompleted ? 'line-through' : '' }}>{todo.text}</h3>
      <button onClick={() => completeTodo(index)}>Done?</button>
    </li>
  );
};

export default Todo;
