import React from 'react';
import CardGroup from "./components/CardGroup";
import MainNav from "./components/MainNav"
import './App.css';

function App() {
  return (
    <div className="container">
      <MainNav />
      <CardGroup />
    </div>
  );
}

export default App;
