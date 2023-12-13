import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ToDoTabPosts from '../ToDoTabPosts/ToDoTabPosts';
import ToDoTabTodos from '../ToDoTabTodos/ToDoTabTodos';
import ToDoTabAlbum from '../ToDoTabAlbum/ToDoTabAlbum';


import './ToDoTabMain.css'


const ToDoTabMain = ({userId}) => {

    return (
        <div>
            <div className='todotab__container'>
            <ToDoTabPosts userId={userId} />
            <ToDoTabTodos userId={userId} />
            <ToDoTabAlbum userId={userId} />

            </div>
        </div>
    )
}


export default ToDoTabMain;