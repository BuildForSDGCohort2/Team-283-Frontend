import React from 'react';
import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Welcome />
    </div>
  );
}

export default App;
