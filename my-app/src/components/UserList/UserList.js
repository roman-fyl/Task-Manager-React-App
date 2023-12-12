import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import "./UserList.css"

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        console.log(data);
      } catch (error) {
        console.log('Error fetching posts:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>UserList</h2>
      <ul className="users__container">
        {users.map(user => (
          <li key={user.id}><Link to={`/users/${user.id}`}>{user.name} ({user.username})</Link></li>
        ))}
      </ul>
    </div>
  )
}

export default UserList;