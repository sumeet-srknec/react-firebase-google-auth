import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { logout } from '../functions/auth';
import { updateData } from '../functions/crud';

export default function UserDashboard() {
    const {user, authProvider } = UserAuth();
    const [newFirstName, setNewFirstName] = useState('');

    const handleLogout = () => {
        logout();
    }

    const handleUpdateUser = () => {
        updateData("users", user.uid, {firstname: newFirstName});
    }

  return (
    <div>
        <p>Welcome { 'google.com' === authProvider ? user?.displayName : user?.firstname} {'google.com' === authProvider && <img src={`${user?.photoURL}`} alt="Profile pic"/>} </p>
        <input type="text" name="newFirstName" id="newFirstName" placeholder='New first name' onChange={e => setNewFirstName(e.target.value)}/>
        <button className='rounded-lg bg-blue-400 hover:bg-blue-700 text-white font-bold px-2 py-2 block mt-2' onClick={handleUpdateUser}>Update</button>
        <button className='rounded-lg bg-blue-400 hover:bg-blue-700 text-white font-bold px-2 py-2 block mt-10' onClick={handleLogout}>Logout</button>
    </div>
  )
}
