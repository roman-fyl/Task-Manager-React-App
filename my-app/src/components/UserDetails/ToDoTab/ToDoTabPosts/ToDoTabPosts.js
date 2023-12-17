import React, { useState, useEffect } from 'react';
import { fetchData } from '../../../../store/api/ApiProfile';
import './ToDoTabPosts.css';

const ToDoTabPosts = ({ userId }) => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {

      fetchData(userId, 'posts').then((data) => {setPosts(data)});
    },[userId]);
  
    if (!posts.length) {
      return <p>No posts available.</p>;
    }
  
    return (
      <div className='list__body'>
        <ul className='list__container tab__menu'>
          {posts.map((post) => (
            <li key={post.id} className='list__item tab__element'>
              <strong>Title:</strong> {post.title}<br />
              <strong>Body:</strong> {post.body}
            </li>
          ))}
        </ul>
      </div>
    );
};

export default ToDoTabPosts;
