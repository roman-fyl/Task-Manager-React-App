import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from '../../store/api/ApiData';

import "./UserList.css"

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData('users').then((data) => {setUsers(data)});
  },[]);

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