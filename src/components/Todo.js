import React from 'react';

const Todo = ({ todo, completeTodo }) => {
  return (
    <li className="todo">
      <h3 style={{textDecoration: todo.isCompleted ? 'line-through' : '' }}>{todo.text}</h3>
      <button onClick={() => completeTodo(todo.id)}>Done?</button>
    </li>
  );
};

export default Todo;
