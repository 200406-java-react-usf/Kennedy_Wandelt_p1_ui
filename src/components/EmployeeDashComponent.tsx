import React, {useState } from 'react';
import { User } from '../models/user';
import { Reimbursement } from '../models/reimbs'
import {Switch, Route, Link } from 'react-router-dom';
import AllReimbsComponent from './AllReimbsComponent';
import ReimbDetailsComponent from './ReimbDetailsComponent';
import MyReimbsComponent from './MyReimbsComponent';

interface IEDashProps {
    authUser: User
}

let EDashComponent = (props: IEDashProps) => {
    //@ts-ignore
    const [thisReimb, setThisReimb] = useState(null as Reimbursement);
  

    return (
      <>
      <h1>My Reimbursements</h1>
      <Link to='/edash/my-reimbs'>all reimbursements</Link>
        <Switch>
        <Route path="/edash/my-reimbs" render={() => <MyReimbsComponent authUser={props.authUser} setThisReimb={setThisReimb}/> } />
          {thisReimb?
                <Route path={`/edash/reimb-details-${thisReimb.reimb_id}`} render={() => <ReimbDetailsComponent authUser={props.authUser} thisReimb={thisReimb}/> } />
                :<></>
          }
        </Switch>
      </>
    );
  }
  
  export default EDashComponent;