import React, { useState, useEffect } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { fetchData } from '../../store/api/ApiData';

import './TodosList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchData('todos').then((data) => {setTodos(data)});
  },[]);

  const handleToggleCompleted = async (id, completed) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          completed: !completed,
        }),
      });

      if (response.ok) {
        setTodos((prevTodos) => {
          const updatedTodos = prevTodos.map((todo) =>
            todo.id === id ? { ...todo, completed: !completed } : todo
          )
          return updatedTodos;
        });
      } else {
        console.error('Failed to update todo status');
      }
    } catch (error) {
      console.error('Error updating todo status:', error);
    }
    finally {
      localStorage.setItem(`todo_${id}_completed`, JSON.stringify(!completed));
    }
  };

  return (
    <div>
      <h2>TodoList</h2>
      <ul className='todos__container'>
        {todos.map((todo) => (
          <li key={todo.id} className='todo__item'>
            <TodoItem todo={todo} onToggleCompleted={(id, completed) => handleToggleCompleted(id, completed)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
