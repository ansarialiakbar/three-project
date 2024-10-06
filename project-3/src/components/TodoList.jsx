import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleStatus, deleteTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          toggleStatus={toggleStatus}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
