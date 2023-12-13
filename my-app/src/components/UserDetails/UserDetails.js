import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ToDoTabMain from './ToDoTab/ToDoTabMain/ToDoTabMain';

import './UserDetails.css'
import icon_name from '../../assets/name.png'
import icon_email from '../../assets/email.png'
import icon_address from '../../assets/address.png'
import icon_phone from '../../assets/phone.png'
import icon_website from '../../assets/website.png'
import icon_company from '../../assets/company.png'
import loader from '../../assets/loader.gif'


const UserDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  if (loading) {
    <img src={loader} alt="{loader}" />
    console.log('Loader works');
    return null;
  }
  if (!user) {
    return <div>User doesn't find, please reload the page</div>;
  }

  const websiteUrl = user.website.startsWith('http://') || user.website.startsWith('https://') ? user.website : `https://www.${user.website}`;
  const telUrl = `tel://${user.phone}`;

  return (
    <div>
      <div className='user__container'>
        <h2>User Profile</h2>
        <div className='element'><img src={icon_name} alt="name" /> <strong>Name:</strong> {user.name}</div><br />
        <div className='element'><img src={icon_email} alt="email" /> <strong>Email:</strong> {user.email}</div><br />
        <div className='address__container'><img src={icon_address} alt="address" /> <strong>Address:</strong>
          <ul className='address'>
            <li>{user.address.street}</li>
            <li>{user.address.suite}</li>
            <li>{user.address.city}</li>
            <li>{user.address.zipcode}</li>
          </ul>
        </div><br />
        <div className='element'><img src={icon_phone} alt="phone" /> <strong>Phone:</strong><a href={telUrl} target='_blank' rel='noreferrer'>{user.phone}</a></div><br />
        <div className='element'><img src={icon_website} alt="website" /> <strong>Website:</strong> <a href={websiteUrl} target='_blank' rel='noreferrer'>{user.website}</a></div><br />
        <div className='element'><img src={icon_company} alt="company" /> <strong>Company:</strong>{user.company.name}</div><br />
        <ToDoTabMain userId={userId} />
      </div>
    </div>
  )

}

export default UserDetails;