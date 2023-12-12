import React, { useState, useEffect } from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, onToggleCompleted }) => {
  const [completed, setCompleted] = useState(() => {
    const storedValue = localStorage.getItem(`todo_${todo.id}_completed`);
    return storedValue ? JSON.parse(storedValue) : todo.completed;
  });

  useEffect(() => {
    localStorage.setItem(`todo_${todo.id}_completed`, JSON.stringify(completed));
  }, [completed, todo.id]);

  const handleToggle = () => {
    setCompleted(!completed);
    onToggleCompleted(todo.id, completed);
  };

  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`} onClick={handleToggle}>
      {todo.title}
    </div>
  );
};


export default TodoItem;
