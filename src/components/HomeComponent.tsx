import React from 'react';
import './HomeComponent.css';
import { User } from '../models/user';
import { Link } from 'react-router-dom'

interface IHomeProps {
    authUser: User;
}

function HomeComponent(props: IHomeProps){
    return (
        <>
            <div className="background flex">
                <div className="jumbotron">
                    {!props.authUser ? 
                        <h1 className="display-4">Welcome to ERS</h1>:
                        <h1 className="display-4">Welcome, {props.authUser.username}!</h1>
                    }
                    <p className="lead">A system where employees, admin, and financial managers can manage reimbursements</p>
                    <hr className="my-4"/>
                    
                    {!props.authUser ?
                        <>
                        <p>Employees can access their own reimbursements or make new ones which can be approved by financial managers. Login to see your reimbursements!</p>
                        <Link className="btn btn-primary btn-m" style={{color: 'white', backgroundColor: "#3340a1", borderColor: "#3340a1"}} to="/login" role="button">Login</Link>
                        </>:
                        <>
                        <p>To create, view, and edit reimbursements go to MyReimbursements!</p>
                        <Link className="btn btn-primary btn-m" style={{color: 'white', backgroundColor: "#3340a1", borderColor: "#3340a1"}} to="/my-reimbs" role="button">My Reimbursements</Link>
                        </>
                    }
                </div>
            </div>
        </>
    );

}

export default HomeComponent;