import React, { useState, useEffect } from 'react';
import './ToDoTabPosts.css';


const ToDoTabPosts = ({ userId, className, onClick }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
          const data = await response.json();
          console.log(data);
          setPosts(data);
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      };
  
      fetchData();
    }, [userId]);
  
    if (!posts.length) {
      return <p>No posts available.</p>;
    }
  
    return (
      <div className='list__body' onClick={onClick}>
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