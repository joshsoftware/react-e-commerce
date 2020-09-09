import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';
function App() {
  return (
    <div className="App">
      <SearchBar placeholder="search products" handleChange = {(e)=>{console.log(e.target.value)}}/>
    </div>
  );
}

export default App;
