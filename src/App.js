import React from 'react';
import Container from "./components/Container";
import BasketList from './components/BasketList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Basket List</h2>
      </header>
      <Container>
        <BasketList />
      </Container>
    </div>
  );
}

export default App;
