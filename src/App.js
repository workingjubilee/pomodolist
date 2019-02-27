import React, { useState } from 'react';
import './App.css';

const Todo = ({ todo, index }) => {
  return <h1>{todo.text}</h1>
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
  }

  return (
    <div className="Another tiresome div">
      {todos.map((todo, index) =>
        <Todo key={index} index={index} todo={todo} />
        )
      }
      <TodoForm addTodo={addTodo} />
    </div>

  );
};

export default App;
