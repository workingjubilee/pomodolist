import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

// Okay, so, todos need to be in familiar categories
// Read x pages, for instance.
// the todos can be broken up and parsed for similar words
// there are probably existing libraries that help in this
// writing regex wouldn't be too hard though if it came to that
//

// things that need to exist in the app for that:
// time tracker
// todo event archive
// math functions for the computation


const App = () => {
  const [todos, setTodos] = useState([
    { text: 'Learn React Hooks',
      isCompleted: false,
      id: 1 },
    { text: 'Build toDo App with Hooks',
      isCompleted: false,
      id: 2 },
    { text: 'Get more sleep',
      isCompleted: false,
      id: 3 }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) return { ...todo, isCompleted: !todo.isCompleted };
        return todo;
      })
    );
  };

  const clearCompleted = () => {
    const newTodos = [...todos].filter(todo => todo.isCompleted === false);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <ul className="todo-list">
        {todos.map(todo =>
          <Todo
            key={todo.id}
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
