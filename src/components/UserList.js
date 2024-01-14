// UserList.js
import React, { useState, useEffect } from 'react';
import LoadingIndicator from './LoadingIndicator';
import ErrorDisplay from './ErrorDisplay';
import Search from './Search';

// UserList component for displaying a list of users
function UserList() {
  const [users, setUsers] = useState([]); // State for all users
  const [filteredUsers, setFilteredUsers] = useState([]); // State for filtered users
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for storing errors

  // Effect for fetching user data
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data); // Set fetched users
        setFilteredUsers(data); // Initialize filtered users
        setLoading(false); // Disable loading indicator
      })
      .catch(error => {
        setError(error.message); // Set error message
        setLoading(false); // Disable loading indicator
      });
  }, []);

  // Function to handle search input
  function handleSearch(searchTerm) {
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered); // Update filtered users based on search term
  }

  // Conditional rendering based on loading and error states
  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorDisplay message={error} />;
  
  // Rendering user list or a message if no users are found
  return (
    <>
      <Search onSearch={handleSearch} />
      <ul className="UserList">
        {filteredUsers.length > 0 ? filteredUsers.map(user => (
          <li key={user.id} className="UserListItem">
            <div className="UserDetails">
              <i className="fas fa-user fa-icon"></i>
              <span className="UserName">{user.name}</span>
            </div>
            <div className="UserDetails">
              <i className="fas fa-at fa-icon"></i>
              <span className="UserUsername">{user.username}</span>
            </div>
            <div className="UserDetails">
              <i className="fas fa-envelope fa-icon"></i>
              <span className="UserEmail">{user.email}</span>
            </div>
          </li>
        )) : (
          <li>No users found</li>
        )}
      </ul>
    </>
  );
}

export default UserList; // Export the UserList component
