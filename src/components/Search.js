// Search.js
import React from 'react'; // Import React

// Search component for user input
function Search({ onSearch }) {
  return (
    <div className='Search'>
      <input
        type="text"
        onChange={(e) => onSearch(e.target.value)} // Calls onSearch function on input change
        placeholder="Search users..." // Placeholder text for the input field
      />
    </div>
  );
}

export default Search; // Export the Search component
