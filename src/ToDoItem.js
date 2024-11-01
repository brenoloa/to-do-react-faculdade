import React, { useState } from 'react';

function ToDoItem({ todo, toggleComplete, updateTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    updateTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={editText}
            onChange={handleEditChange}
          />
          <button type="submit">Salvar</button>
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancelar
          </button>
        </form>
      ) : (
        <>
          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button onClick={() => deleteTodo(todo.id)}>Excluir</button>
        </>
      )}
    </li>
  );
}

export default ToDoItem;