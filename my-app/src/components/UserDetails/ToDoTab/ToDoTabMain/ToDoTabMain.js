import React from 'react';
import ToDoTabPosts from '../ToDoTabPosts/ToDoTabPosts';
import ToDoTabTodos from '../ToDoTabTodos/ToDoTabTodos';
import ToDoTabAlbum from '../ToDoTabAlbum/ToDoTabAlbum';


import './ToDoTabMain.css'


const ToDoTabMain = ({userId}) => {

    const elements = document.querySelectorAll('.todotab__element');

    const updateActiveClass = (event) => {
      elements.forEach(el => {
        el.classList.remove('active');
      });
      event.currentTarget.classList.add('active');
      console.log(event.currentTarget)
    };



    return (
        <div>
            <div className='todotab__container'>
            <ToDoTabPosts userId={userId} className='todotab__element active' onClick={updateActiveClass} />
            <ToDoTabTodos userId={userId} className='todotab__element' onClick={updateActiveClass} />
            <ToDoTabAlbum userId={userId} className='todotab__element' onClick={updateActiveClass} />

            </div>
        </div>
    )
}


export default ToDoTabMain;