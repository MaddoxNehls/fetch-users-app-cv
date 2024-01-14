// App.js
import './App.css'; // Importing the stylesheet
import React from 'react'; // Import React
import Header from './components/Header'; // Import Header component
import UserList from './components/UserList'; // Import UserList component

// App component - main component of the application
function App() {
  return (
    <div className="App">
      <Header />      
      <UserList />
    </div>
  );
}

export default App; // Export App component for use in index.js
