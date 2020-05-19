import React, {useState } from 'react';
import { User } from '../models/user';
import {Switch, Route, Link } from 'react-router-dom';
import NewUserComponent from './NewUserComponent';
import AllUsersComponent from './AllUsersComponent';
import EditUserComponent from './EditUserComponent';

interface IADashProps {
    authUser: User
}

let ADashComponent = (props: IADashProps) => {
    //@ts-ignore
    const [editUser, setEditUser] = useState(null as User);
  

    return (
      <>
      <h1>Admin Dashboard</h1>
      <Link to='/adash/all-users'>All Users</Link>
        <Switch>
            <Route path="/adash/new-user" render={() => <NewUserComponent  authUser={props.authUser} newUser={undefined} /> } />
            <Route path="/adash/all-users" render={() => <AllUsersComponent authUser={props.authUser} setEditUser={setEditUser}/> } />
            <Route path="/adash/edit-user" render={() => <EditUserComponent authUser={props.authUser} editUser={editUser} /> } />
        </Switch>
      </>
    );
  }
  
  export default ADashComponent;