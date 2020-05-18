import React, {useState } from 'react';
import { User } from '../models/user';
import { Reimbursement } from '../models/reimbs'
import {Switch, Route, Link } from 'react-router-dom';
import AllReimbsComponent from './AllReimbsComponent';
import ReimbDetailsComponent from './ReimbDetailsComponent';

interface IFDashProps {
    authUser: User
}

let FDashComponent = (props: IFDashProps) => {
    //@ts-ignore
    //const [reimbs, setReimbs] = useState([] as Reimbursement[]);
    //@ts-ignore
    const [thisReimb, setThisReimb] = useState(null as Reimbursement);
  

    return (
      <>
      <h1>Financial Manager Dashboard</h1>
      <Link to='/fmdash/reimb-all'>All Reimbs</Link>
        <Switch>
          <Route path={"/fmdash/reimb-all"} render={() => <AllReimbsComponent authUser={props.authUser} setThisReimb={setThisReimb}/> } />
          {thisReimb?
                <Route path={`/fmdash/reimb-details-${thisReimb.reimb_id}`} render={() => <ReimbDetailsComponent authUser={props.authUser} thisReimb={thisReimb}/> } />
                :<></>
          }
        </Switch>
      </>
    );
  }
  
  export default FDashComponent;