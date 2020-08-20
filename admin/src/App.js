import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Container from './components/Container'
import { Provider } from "react-redux" 
import { store } from "./store/configStore"

const style = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: "row",
}

function App() {
  return (
    // id="wrapper"
    <div className="App" style={style}>
      <Provider store={store}>
      <Navbar />
      <Container />
      </Provider>
    </div>
  );
}

export default App;
