import React, { useState } from 'react';

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange ={event => setValue(event.target.value )} />
    </form>
  );
}

export default TodoForm;
