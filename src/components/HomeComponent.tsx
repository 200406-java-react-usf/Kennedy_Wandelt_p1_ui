import React from 'react';
import './HomeComponent.css';
import { User } from '../models/user';
import { getUsers } from '../remote/user-service'

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
                    <p>Employees can access their own reimbursements or make new ones which can be approved by financial managers. Login to see your reimbursements!</p>
                    <button onClick={getUsers}>getUsers</button>
                    {!props.authUser ?
                        <a className="btn btn-primary btn-lg" href="/login" role="button">Login</a>:
                        <a className="btn btn-primary btn-lg" href="/my-reimbs" role="button">My Reimbursements</a>
                    }
                </div>
            </div>
        </>
    );

}

export default HomeComponent;