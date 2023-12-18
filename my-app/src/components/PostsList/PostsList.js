import React, { useState, useEffect } from 'react';
import PostForm from '../PostForm/PostForm';
import { fetchData } from '../../store/api/ApiData';

import "./PostsList.css"

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData('posts').then((data) => {setPosts(data)});
  },[]);

  const handleAddPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost])
  }

  return (
    <div className='list__body'>
      <h2>PostsList</h2>
      <PostForm onAddPost={handleAddPost} />
      <ul className='list__container'>
        {posts.map((post) => (
          <li key={post.id} className='list__item'>
            <strong>Title:</strong> {post.title}<br />
            <strong>Body:</strong> {post.body}
          </li>
        )).reverse()}
      </ul>
    </div>
  );
};

export default PostsList;