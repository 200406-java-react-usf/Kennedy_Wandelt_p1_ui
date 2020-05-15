import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import LoginComponent from './components/LoginComponent';
import HomeComponent from './components/HomeComponent';
import RegisterComponent from './components/RegisterComponent';

import { User } from './models/user';
import NavbarComponent from './components/NavbarComponent';
import { AppBar, Toolbar, Typography, createMuiTheme, ThemeProvider } from '@material-ui/core';

function App() {
  // const theme = createMuiTheme({
  //   palette: {
  //     primary: {
  //       main:'#424242',
  //     },
  //     secondary: {
  //       main: '#ff9100'
  //     }
  //   }
  // })


  // @ts-ignore
  const [authUser, setAuthUser] = useState(null as User);

  const mockReimbs = [
    {
      id:1,
      amount: '300.00',
      description: 'new laptop'
    },
    {
      id:2,
      amount: '6000.00',
      description: 'new car'
    },
    {
      id:3,
      amount: '80.00',
      description: 'hotel'
    }
  ]

  return (
    <>
    <Router>
      {/* {!authUser ?
      <Redirect to="/login" /> :
      <></>
      } */}
        <NavbarComponent authUser={authUser}/>

        <Switch>
          <Route path="/home" render={() => <HomeComponent un={authUser?.un} /> } />
          <Route path="/login" render={() => <LoginComponent authUser={authUser} setAuthUser={setAuthUser} /> } />
          <Route path="/register" render={() => <RegisterComponent/> } />
        </Switch>
      </Router>
    </>
  );
}

export default App;
