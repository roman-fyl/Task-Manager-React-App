import React, { useState, useEffect } from 'react';
import TodoItem from '../../../TodoItem/TodoItem';
import { getProfileData } from '../../../../store/api/ApiProfile';
import './ToDoTabTodos.css';

const ToDoTabTodos = ({ userId }) => {
    const [todos, setTodos] = useState([]);
  
    useEffect(() => {

      getProfileData(userId, 'todos').then((data) => {setTodos(data)});
    },[userId]);


    if (!todos.length) {
      return <p>No Todo available.</p>;
    }
  
    return (
      <div className='list__body'>
        <ul className='list__container tab__todo__menu'>
          {todos.map((todo) => (
            <li key={todo.id} className='tab__todo__item'>
              <TodoItem todo={todo} />
            </li>
          ))}
        </ul>
      </div>
    );
};

export default ToDoTabTodos;
