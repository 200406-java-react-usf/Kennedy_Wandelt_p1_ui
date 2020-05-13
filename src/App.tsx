import React from 'react';
import './App.css';
import { LoginComponent } from './components/LoginComp';
import { Home } from './components/Home';
import { UserTable } from './components/Users'

function App() {
  return (
    <div className="App">
      <UserTable />
    </div>
  );
}

export default App;
