import React, { useState } from 'react';
import ToDoTabPosts from '../ToDoTabPosts/ToDoTabPosts';
import ToDoTabTodos from '../ToDoTabTodos/ToDoTabTodos';
import ToDoTabAlbum from '../ToDoTabAlbum/ToDoTabAlbum';


import './ToDoTabMain.css'


const ToDoTabMain = ({ userId }) => {

  const [activeTab, setActiveTab] = useState('posts');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  return (
    <div>
      <div className='todotab__container'>
        <div
          className={`todotab__element ${activeTab === 'posts' ? 'active' : ''}`}
          onClick={() => handleTabClick('posts')}
        >
          <ToDoTabPosts userId={userId} />
        </div>
        <div
          className={`todotab__element ${activeTab === 'todos' ? 'active' : ''}`}
          onClick={() => handleTabClick('todos')}
        >
          <ToDoTabTodos userId={userId} />
        </div>
        <div
          className={`todotab__element ${activeTab === 'album' ? 'active' : ''}`}
          onClick={() => handleTabClick('album')}
        >
          <ToDoTabAlbum userId={userId} />
        </div>
      </div>
    </div>
  )
}


export default ToDoTabMain;