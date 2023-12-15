import React, { useState, useEffect } from 'react';
import TodoItem from '../../../TodoItem/TodoItem';
import './ToDoTabTodos.css';

const ToDoTabTodos = ({ userId }) => {
    const [todos, setTodos] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
          const data = await response.json();
          setTodos(data);
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      };
      fetchData();
    },[userId]);

    const handleToggleCompleted = async (id, completed) => {
      try {
      } catch (error) {
        console.error('Error updating todo status:', error);
      }
    };

    if (!todos.length) {
      return <p>No Todo available.</p>;
    }
  
    return (
      <div className='list__body'>
        <ul className='list__container tab__todo__menu'>
          {todos.map((todo) => (
            <li key={todo.id} className='tab__todo__item'>
              <TodoItem todo={todo} onToggleCompleted={(id, completed) => handleToggleCompleted(id, completed)} />
            </li>
          ))}
        </ul>
      </div>
    );
};

export default ToDoTabTodos;
