import React, { useState } from 'react';
import './App.css';
import Login from './Components/Login';
import UserList from './Components/UserList';
import UserDetail from './Components/UserDetail';

const mockUsers = [
    { id: 1, username: 'john_doe', age: 25, gender: 'Male' },
    { id: 2, username: 'jane_doe', age: 28, gender: 'Female' },
    { id: 3, username: 'sam_smith', age: 22, gender: 'Male' }
];

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleLogin = () => {
        setIsLoggedIn(true);
        setShowLoginModal(false);
    };

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    const handleBackClick = () => {
        setSelectedUser(null);
    };

    return (
        <div className="App">
            <header>
                <button onClick={() => setShowLoginModal(true)}>Login</button>
            </header>
            {showLoginModal && <Login onClose={() => setShowLoginModal(false)} onLogin={handleLogin} />}
            {isLoggedIn && !selectedUser && <UserList users={mockUsers} onUserClick={handleUserClick} />}
            {selectedUser && <UserDetail user={selectedUser} onBackClick={handleBackClick} />}
        </div>
    );
}

export default App;
