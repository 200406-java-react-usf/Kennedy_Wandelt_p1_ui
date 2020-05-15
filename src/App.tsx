import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import LoginComponent from './components/LoginComponent';
import HomeComponent from './components/HomeComponent';
import NewUserComponent from './components/NewUserComponent';

import { User } from './models/user';
import NavbarComponent from './components/NavbarComponent';
import { AppBar, Toolbar, Typography, createMuiTheme, ThemeProvider } from '@material-ui/core';

function App() {


  // @ts-ignore
  const [authUser, setAuthUser] = useState(null as User);

  return (
    <>
    <Router>
      <NavbarComponent authUser={authUser}/>

      <Switch>
        <Route path="/home" render={() => <HomeComponent un={authUser?.username} /> } />
        <Route path="/login" render={() => <LoginComponent authUser={authUser} setAuthUser={setAuthUser} /> } />
        <Route path="/new-user" render={() => <NewUserComponent  authUser={authUser} /> } />
      </Switch>
      </Router>
    </>
  );
}

export default App;
