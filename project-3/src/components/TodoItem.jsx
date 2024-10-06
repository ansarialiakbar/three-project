import React from 'react';

const TodoItem = ({ todo, index, toggleStatus, deleteTodo }) => {
  return (
    <div className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
      <span className="todo-number">{index + 1}. </span>
      <span className="todo-title">{todo.title}</span>
      <button onClick={() => toggleStatus(index)} className="status-button">
        {todo.isCompleted ? 'Mark as Pending' : 'Mark as Completed'}
      </button>
      <button onClick={() => deleteTodo(index)} className="delete-button">Delete</button>
    </div>
  );
};

export default TodoItem;
