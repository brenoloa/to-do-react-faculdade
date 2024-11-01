import React, { useState } from 'react';

function ToDoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== '') {
      addTodo(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Adicionar tarefa..."
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default ToDoForm;