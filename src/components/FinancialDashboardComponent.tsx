import React, { useEffect, useState } from 'react';
import { User } from '../models/user';
import { Reimbursement } from '../models/reimbs'
import { Redirect, Router, Switch, Route } from 'react-router-dom';
import AllReimbsComponent from './AllReimbsComponent';
import ReimbDetailsComponent from './ReimbDetailsComponent';

interface IFDashProps {
    authUser: User
}

let FDashComponent = (props: IFDashProps) => {
    //@ts-ignore
    const [reimbs, setReimbs] = useState([] as Reimbursement[]);
    //@ts-ignore
    const [thisReimb, setThisReimb] = useState(null as Reimbursement);
  

    return (
      <>
        <Switch>
          <Route path={`/${thisReimb.reimb_id}`} render={() => <ReimbDetailsComponent authUser={props.authUser} thisReimb={thisReimb}/> } />
          <Route path={"/all-reimbs"} render={() => <AllReimbsComponent authUser={props.authUser}/> } />
        </Switch>
      </>
    );
  }
  
  export default FDashComponent;