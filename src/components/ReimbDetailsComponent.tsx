import React from 'react';
import { User } from '../models/user';
import { Reimbursement } from '../models/reimbs';
import { resolve } from 'dns';
import { updateReimb } from '../remote/reimb-service';
import { Link } from 'react-router-dom';

export interface IReimbDetailsProps {
    authUser: User
    thisReimb: Reimbursement
}

let ReimbDetailsComponent = (props: IReimbDetailsProps) => {

    let approveReimb = async () => {
        let newReimb = {...props.thisReimb}
        newReimb.resolver_id = props.authUser.ers_user_id;
        //@ts-ignore
        newReimb.resolved = Date.now();
        newReimb.reimb_status = '2';
        switch (newReimb.reimb_type){
            case 'lodging':
                newReimb.reimb_type = '1';
                break;
            case 'travel':
                newReimb.reimb_type = '2';
                break;
            case 'food':
                newReimb.reimb_type = '3';
                break;
            case 'other':
                newReimb.reimb_type = '4';
                break;
        }
        let updatedReimb = await updateReimb(newReimb);
    }
    let denyReimb = async () => {
        let newReimb = {...props.thisReimb}
        newReimb.resolver_id = props.authUser.ers_user_id;
        //@ts-ignore
        newReimb.resolved = Date.now();
        newReimb.reimb_status = '3';
        switch (newReimb.reimb_type){
            case 'lodging':
                newReimb.reimb_type = '1';
                break;
            case 'travel':
                newReimb.reimb_type = '2';
                break;
            case 'food':
                newReimb.reimb_type = '3';
                break;
            case 'other':
                newReimb.reimb_type = '4';
                break;
        }
        let updatedReimb = await updateReimb(newReimb);
    }

    let header = `Reimbursement #${props.thisReimb.reimb_id}`;

    return(
        <>
        <div style={{ marginTop: 0, marginLeft: '28%', marginRight: '28%', marginBottom: '13%', backgroundColor:'rgba(255, 255, 255, 0.651)'}} className='border-radius'>

        <table className="table table-borderless" style={{marginBottom: '20px'}}>
            <thead>
                <tr>
                <th scope="col">{header}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">Amount:</th>
                <td>{props.thisReimb.amount}</td>
                </tr>
                <tr>
                <th scope="row">Description:</th>
                <td>{props.thisReimb.description}</td>
                </tr>
                <tr>
                <th scope="row">Time submitted:</th>
                <td>{props.thisReimb.submitted}</td>
                </tr>
                <tr>
                <th scope="row">Author Id:</th>
                <td>{props.thisReimb.author_id}</td>
                </tr>
                <tr>
                <th scope="row">Type:</th>
                <td>{props.thisReimb.reimb_type}</td>
                </tr>
                <tr>
                <th scope="row">Status:</th>
                <td>{props.thisReimb.reimb_status}</td>
                </tr>
                <tr>
                <th scope="row">Time resolved:</th>
                <td>{props.thisReimb.resolved? props.thisReimb.resolved: 'N/A'}</td>
                </tr>
                <tr>
                <th scope="row">Resolver Id:</th>
                <td>{props.thisReimb.resolver_id? props.thisReimb.resolver_id: 'N/A'}</td>
                </tr>
            </tbody>
        </table>

        {!props.thisReimb.resolved && props.authUser.role_name === "fmanager"?
            <>
            <div style={{justifyContent: 'center', display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
            <Link onClick={approveReimb} to='/fmdash/reimb-all' className="btn btn-primary btn-m" role="button" style={{color: 'white', backgroundColor: "#387341", borderColor: "#387341", marginRight: '10px', marginBottom: '20px'}}>Approve</Link>
            <Link onClick={denyReimb} to='/fmdash/reimb-all' className="btn btn-primary btn-m" role="button" style={{color: 'white', backgroundColor: "#e00d0d", borderColor: "#e00d0d", marginBottom: '20px'}}>Deny</Link>
            </div>
            </>:
            <></>
        }
        </div>
        </>
    )

}

export default ReimbDetailsComponent;