import React, { useState, useEffect } from 'react';
import TodoItem from '../../../TodoItem/TodoItem';

import './ToDoTabTodos.css'


const ToDoTabTodos = ({ userId, className, onClick }) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
          const data = await response.json();
        //   console.log(data);
          setTodos(data);
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      };
  
      fetchData();
    }, [userId]);

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
  
    if (!todos.length) {
      return <p>No Todo available.</p>;
    }
  
    return (
        <div className='list__body' onClick={onClick}>
          <ul className='list__container tab__menu album'>
            {todos.map((todo) => (
              <li key={todo.id} className='todo__item tab__element'>
                <TodoItem todo={todo} onToggleCompleted={(id, completed) => handleToggleCompleted(id, completed)} />
              </li>
            ))}
          </ul>
        </div>
      );
  };

export default ToDoTabTodos;