import React, { useState, useEffect } from 'react';
import { getProfileData } from '../../../../store/api/ApiProfile';
import './ToDoTabAlbum.css';

const ToDoTabAlbum = ({ userId }) => {
    const [album, setAlbum] = useState([]);
  
    useEffect(() => {

      getProfileData(userId, 'albums').then((data) => {setAlbum(data)});
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
