import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import LoginComponent from './components/LoginComponent';
import HomeComponent from './components/HomeComponent';
import NewUserComponent from './components/NewUserComponent';

import { User } from './models/user';
import NavbarComponent from './components/NavbarComponent';
import { AppBar, Toolbar, Typography, createMuiTheme, ThemeProvider } from '@material-ui/core';
import AllUsersComponent from './components/AllUsersComponent';
import MyReimbsComponent from './components/MyReimbsComponent';
import AllReimbsComponent from './components/AllReimbsComponent';
import FDashComponent from './components/FinancialDashboardComponent';
import EDashComponent from './components/EmployeeDashComponent';

function App() {


  // @ts-ignore
  const [authUser, setAuthUser] = useState(null as User);

  return (
    
    <>
    <Router>
      <NavbarComponent authUser={authUser} setAuthUser={setAuthUser}/>
      {!authUser ?
      <Redirect to="/login" /> :
      <Redirect to="/home" />
      }
      <Switch>
        <Route path="/home" render={() => <HomeComponent authUser={authUser} /> } />
        <Route path="/login" render={() => <LoginComponent authUser={authUser} setAuthUser={setAuthUser} /> } />
        <Route path="/new-user" render={() => <NewUserComponent  authUser={authUser} newUser={undefined} /> } />
        <Route path="/all-users" render={() => <AllUsersComponent authUser={authUser}/> } />
        <Route path="/fmdash" render={() => <FDashComponent authUser={authUser}/> } />
        <Route path="/edash" render={() => <EDashComponent authUser={authUser}/> } />
      </Switch>
    </Router>
    </>
  );
}

export default App;
