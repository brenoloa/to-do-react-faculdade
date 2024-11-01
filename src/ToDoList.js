import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, toggleComplete, updateTodo, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default ToDoList;