import React from 'react';
import './App.css';
import Login from './components/Login'
import OrderedList from './components/OrderedList';
import ReactResources from './components/ReactResources';

const petNames = [] // ['Hat', 'Babaloo', 'Mia', 'Bear', 'Kat', 'Max', 'Mister Miyagi', 'Pikachu'];
const resources = ['https://github.com/enzymejs/enzyme']

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Enzyme for Testing React
      </header>
      <Login />
      <OrderedList options={petNames} />
      {/* show a list of links to react resources */}
      <ReactResources options={resources}/>
    </div>
  );
}

export default App;
