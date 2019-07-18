import React from 'react';
import logo from './logo.svg';
import './App.css';
import Age from './components/age'
import ShowAge from './components/showAge'
import ShowHistory from './components/showHistory';
import FlexComponent from './components/flexComponent';

function App() {
  return (
    <div className="App">
      {/* <FlexComponent /> */}
      <ShowAge />
      {/* <ShowHistory /> */}
      <Age />
    </div>
  );
}

export default App;
