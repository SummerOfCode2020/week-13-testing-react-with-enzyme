import React from 'react';
import './App.css';
import Login from './components/Login'
import OrderedList from './components/OrderedList';
import ReactResources from './components/ReactResources';

const petNames = ['Luz', 'Murphy', 'Babaloo', 'Hat', 'Mia', 'Bear', 'Kat', 'Max', 'Mister Miyagi', 'Pikachu'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Enzyme for Testing React
      </header>
      <Login />
      <OrderedList options={petNames} />
      <ReactResources />
    </div>
  );
}

export default App;
