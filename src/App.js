import React from 'react';
import './App.css';
import Login from './components/Login'
import OrderedList from './components/OrderedList';
import ReactResources from './components/ReactResources';

const petNames = ['Hat', 'Mia', 'Bear', 'Kat', 'Max', 'Mister Miyagi', 'Pikachu'];
const links = [
      {
        name: "Enzyme Github",
        URL: "https://github.com/enzymejs/enzyme",
      },
      {
        name: "Enzyme Cheatsheet",
        URL: "https://devhints.io/enzyme",
      },
    ];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Enzyme for Testing React
      </header>
      <Login />
      <OrderedList options={petNames} />
      < ReactResources urlLinks={links} />
    </div>
  );
}

export default App;
