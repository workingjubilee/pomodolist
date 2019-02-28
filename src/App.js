import React, { useState } from 'react';
import './App.css';

const Todo = ({ todo, index, completeTodo }) => {
  return (
    <div className="todo">
      <h3 style={{textDecoration: todo.isCompleted ? 'line-through' : '' }}>{todo.text}</h3>
      <button onClick={() => completeTodo(index)}>Done?</button>
    </div>
  )
}

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange ={event => setValue(event.target.value )} />
    </form>
  );
}



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
    <div className="Another tiresome div">
      {todos.map((todo, index) =>
        <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} />
        )
      }
      <button onClick={clearCompleted}>Clear Completed</button>
      <TodoForm addTodo={addTodo} />
    </div>

  );
};

export default App;
