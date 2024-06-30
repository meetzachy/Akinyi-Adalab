import React from 'react';
import './UserDetail.css';

const UserDetail = ({ user, onBackClick }) => {
    return (
        <div className="user-detail-container">
            <button onClick={onBackClick}>Back</button>
            <div className="user-details">
                <p>Username: {user.username}</p>
                <p>Age: {user.age}</p>
                <p>Gender: {user.gender}</p>
            </div>
        </div>
    );
};

export default UserDetail;
