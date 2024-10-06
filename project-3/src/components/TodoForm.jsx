import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task..."
        className="todo-input"
      />
      <button type="submit" className="todo-button">Add Todo</button>
    </form>
  );
};

export default TodoForm;
