import React from 'react';
import './HomeComponent.css';

interface IHomeProps {
    un: string
}

const HomeComponent = (props: IHomeProps) => {

    return (
        <>
            <div className="background">
            <div className="jumbotron">
            <h1 className="display-4">Welcome to ERS</h1>
            <p className="lead">A system where employees, admin, and financial managers can manage reimbursements</p>
            <hr className="my-4"/>
            <p>Employees can access their own reimbursements or make new ones which can be approved by financial managers. Login to see your reimbursements!</p>
            <a className="btn btn-primary btn-lg" href="/login" role="button">Login</a>
            </div>
            </div>
        </>
    );

}

export default HomeComponent;