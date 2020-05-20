import React, {useState } from 'react';
import { User } from '../models/user';
import { Reimbursement } from '../models/reimbs'
import {Switch, Route, Link, Redirect } from 'react-router-dom';
import AllReimbsComponent from './AllReimbsComponent';
import ReimbDetailsComponent from './ReimbDetailsComponent';
import MyReimbsComponent from './MyReimbsComponent';
import NewReimbComponent from './NewReimbursementComponent';
import EditReimbComponent from './EditReimbComponent';

interface IEDashProps {
    authUser: User
}

let EDashComponent = (props: IEDashProps) => {
    //@ts-ignore
    const [thisReimb, setThisReimb] = useState(null as Reimbursement);
    //@ts-ignore
    const [editReimb, setEditReimb] = useState(null as Reimbursement);

    return (
        !props.authUser?
        <Redirect to="/home"/>:
        
        <>
        <div className="background-dash">
        <div style={{paddingTop: '2%', paddingLeft: '3%', paddingRight: '3%', paddingBottom: '2%', marginBottom: '2%', backgroundColor:'rgba(255, 255, 255, 0.651)', width: '100%'}}>
            <h1>My Reimbursements</h1>
            <Link to={'/edash/new-reimb'} className="btn btn-primary btn-m" role="button" style={{color: 'white', backgroundColor: "#3340a1", borderColor: "#3340a1"}}>New Reimbursement</Link>
            <span>  </span>
            <Link to='/edash/my-reimbs' className="btn btn-primary btn-m" role="button" style={{color: 'white', backgroundColor: "#3340a1", borderColor: "#3340a1"}}>All reimbursements</Link>
        </div>
            <Switch>
                <Route path="/edash/edit-reimb" render={() => <EditReimbComponent authUser={props.authUser} editReimb={editReimb}/>}/>
                <Route path="/edash/new-reimb" render={() => <NewReimbComponent authUser={props.authUser} />} />
                <Route path="/edash/my-reimbs" render={() => <MyReimbsComponent authUser={props.authUser} setThisReimb={setThisReimb} setEditReimb={setEditReimb}/> } />
                {thisReimb?
                        <Route path={`/edash/reimb-details-${thisReimb.reimb_id}`} render={() => <ReimbDetailsComponent authUser={props.authUser} thisReimb={thisReimb}/> } />
                        :<></>
                }
            </Switch>
        </div>
        </>
    );
  }
  
  export default EDashComponent;