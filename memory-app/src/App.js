import React from 'react';
import CardGroup from "./components/CardGroup";
import MainNav from "./components/MainNav";
import JumboHeader from "./components/JumboHeader";
import './App.css';

function App() {
  return (
    <div className="container">
      <MainNav />
      <JumboHeader />
      <CardGroup />
    </div>
  );
}

export default App;
