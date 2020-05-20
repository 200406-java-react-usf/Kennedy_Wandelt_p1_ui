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
    const [thisReimb, setThisReimb] = useState(null as Reimbursement);
  

    return (
      <>
      <div>
        <div style={{marginTop: '2%', marginLeft: '3%', marginRight: '3%'}}>
        <h1>Financial Manager Dashboard</h1>
        </div>
          <Switch>
            <Route path={"/fmdash/reimb-all"} render={() => <AllReimbsComponent authUser={props.authUser} setThisReimb={setThisReimb}/> } />
            {thisReimb?
                  <Route path={`/fmdash/reimb-details-${thisReimb.reimb_id}`} render={() => <ReimbDetailsComponent authUser={props.authUser} thisReimb={thisReimb}/> } />
                  :<></>
            }
          </Switch>
        </div>
      </>
    );
  }
  
  export default FDashComponent;