import React, { useState, useEffect } from 'react';
import './ToDoTabAlbum.css';

const ToDoTabAlbum = ({ userId }) => {
    const [album, setAlbum] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`);
          const data = await response.json();
          console.log(data);
          setAlbum(data);
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      };
      fetchData();
    },[userId]);
  
    if (!album.length) {
      return <p>No albums available.</p>;
    }
  
    return (
      <div className='list__body'>
        <ul className='list__container album tab__menu'>
          {album.map((album_element) => (
            <li key={album_element.id} className='tab__element'>
              <strong>Title:</strong> {album_element.title}<br />
            </li>
          ))}
        </ul>
      </div>
    );
};

export default ToDoTabAlbum;
