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
      <div className="background-dash">
        <div style={{paddingTop: '2%', paddingLeft: '3%', paddingRight: '3%', paddingBottom: '2%', marginBottom: '2%', backgroundColor:'rgba(255, 255, 255, 0.651)', width: '100%'}}>
        <h1>Admin Dashboard</h1>
        <Link to='/adash/all-users'className="btn btn-primary btn-m" role="button" style={{color: 'white', backgroundColor: "#3340a1", borderColor: "#3340a1"}}>All Users</Link>
        <span>  </span>
        <Link to='/adash/new-user'className="btn btn-primary btn-m" role="button" style={{color: 'white', backgroundColor: "#3340a1", borderColor: "#3340a1"}}>New User</Link>
        </div>
          <Switch>
              <Route path="/adash/new-user" render={() => <NewUserComponent  authUser={props.authUser} newUser={undefined} /> } />
              <Route path="/adash/all-users" render={() => <AllUsersComponent authUser={props.authUser} setEditUser={setEditUser}/> } />
              <Route path="/adash/edit-user" render={() => <EditUserComponent authUser={props.authUser} editUser={editUser} /> } />
          </Switch>
      </div>
      </>
    );
  }
  
  export default ADashComponent;