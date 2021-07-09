import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerCord from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <PlayerCord first_name='Jane' last_name='Doe' age={45} hair_color='Black'/>
      <PlayerCord first_name='John' last_name='Smith' age={88} hair_color='Brown'/>
      <PlayerCord first_name='Millard' last_name='Fillmore' age={50} hair_color='Brown'/>
      <PlayerCord first_name='Maria' last_name='Smith' age={62} hair_color='Brown'/>

    </div>
  );
}

export default App;
