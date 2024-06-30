import React from 'react';
import './UserList.css';

const UserList = ({ users, onUserClick }) => {
    return (
        <div className="users-container">
            <h2>Users</h2>
            <ul className="users-list">
                {users.map(user => (
                    <li key={user.id} onClick={() => onUserClick(user)}>
                        {user.username}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
