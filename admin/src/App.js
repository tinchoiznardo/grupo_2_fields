import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Container from './components/Container'

const style = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: "row",
}

function App() {
  return (
    // id="wrapper"
    <div className="App" style={style}>
      <Navbar />
      <Container />
    </div>
  );
}

export default App;
