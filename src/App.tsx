import React from 'react';
import './App.css';
import { LoginComponent } from './components/LoginComponents';
import { Home } from './components/NavbarComponent';
import { UserTable } from './components/UserTableComponent'

function App() {
  return (
    <div className="App">
      <UserTable />
    </div>
  );
}

export default App;
