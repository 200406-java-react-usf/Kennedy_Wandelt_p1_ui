import React from 'react';
import { User } from '../models/user';
import { Reimbursement } from '../models/reimbs';
import { resolve } from 'dns';
import { updateReimb } from '../remote/reimb-service';

interface IReimbDetailsProps {
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
        <h1>{header}</h1>
        <div>
        <p>
            <span>Amount: </span><span>{props.thisReimb.amount}</span>
        </p>
        <p>
            <span>Time submitted: </span><span>{props.thisReimb.submitted}</span>
        </p>
        <p>
            <span>Time resolved: </span><span>{props.thisReimb.resolved? props.thisReimb.resolved: 'N/A'}</span>
        </p>
        <p>
           <span>Description: </span><span>{props.thisReimb.description}</span>
        </p>
        <p>
            <span>Author Id#</span><span>{props.thisReimb.author_id}</span>
        </p>
        <p>
            <span>Resolver Id#: </span><span>{props.thisReimb.resolver_id? props.thisReimb.resolver_id: 'N/A'}</span>
        </p>
        <p>
            <span>Status: </span><span>{props.thisReimb.reimb_status}</span>
        </p>
        <p>
            <span>Type: </span><span>{props.thisReimb.reimb_type}</span>
        </p>
        </div>

        {!props.thisReimb.resolved && props.authUser.role_name === "fmanager"?
            <>
            <button onClick={approveReimb}>Approve</button>
            <button onClick={denyReimb}>Deny</button>
            </>:
            <></>
        }

        </>
    )

}

export default ReimbDetailsComponent;