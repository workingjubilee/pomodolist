import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';


const App = () => {
  const [todos, setTodos] = useState([
    { text: 'Learn React Hooks',
      isCompleted: false },
    { text: 'Build toDo App with Hooks',
      isCompleted: false },
    { text: 'Get more sleep',
      isCompleted: false }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos);
  };

  const clearCompleted = () => {
    const newTodos = [...todos].filter(todo => todo.isCompleted === false);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <ul className="todo-list">
        {todos.map((todo, index) =>
          <Todo
            key={index} index={index}
            todo={todo}
            completeTodo={completeTodo} />
          )
        }
      </ul>
      <button onClick={clearCompleted}>Clear Completed</button>
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;
