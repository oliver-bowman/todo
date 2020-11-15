import React from 'react';
import logo from './logo.svg';
import TodoList from './todo/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          To do list.
        </p>
        <TodoList></TodoList>
      </header>
    </div>
  );
}

export default App;
