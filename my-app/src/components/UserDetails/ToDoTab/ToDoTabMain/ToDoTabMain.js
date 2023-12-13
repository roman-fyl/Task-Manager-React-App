import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ToDoTabPosts from '../ToDoTabPosts/ToDoTabPosts';

import './ToDoTabMain.css'


const ToDoTabMain = ({userId}) => {

    return (
        <div>
            <div className='todotab__container'>
            <ToDoTabPosts userId={userId} />
            console.log(userId)
            </div>
        </div>
    )
}


export default ToDoTabMain;