import React, { useState } from 'react';
import ToDoTabPosts from '../ToDoTabPosts/ToDoTabPosts';
import ToDoTabTodos from '../ToDoTabTodos/ToDoTabTodos';
import ToDoTabAlbum from '../ToDoTabAlbum/ToDoTabAlbum';
import TabContent from '../TabContent/TabContent';


import './ToDoTabMain.css'

const tabs = [
  {label: 'Posts', component: ToDoTabPosts},
  {label: 'Todo', component: ToDoTabTodos}, 
  {label: 'Albums', component: ToDoTabAlbum} 
]

const ToDoTabMain = ({ userId }) => {

  const [activeTab, setActiveTab] = useState('posts');


  return (
    <div>
      <div className='todotabmain__container'>
        {tabs.map((tab) => (
          <TabContent
            key={tab.label}
            label={tab.label}
            active={tab.label === activeTab}
            onClick={() => setActiveTab(tab.label)}
          />
        ))}
      </div>
      <div>
        {tabs.map((tab) => (
          <div key={tab.label}>
            {tab.label === activeTab && <tab.component userId={userId} />}
          </div>
        ))}
      </div>
    </div>
  );
}


export default ToDoTabMain;