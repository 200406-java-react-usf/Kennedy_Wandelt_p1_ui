import React from 'react';
import { User } from '../models/user';
import { Reimbursement } from '../models/reimbs';

interface IReimbDetailsProps {
    authUser: User
    thisReimb: Reimbursement
}

let ReimbDetailsComponent = (props: IReimbDetailsProps) => {

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

        {!props.thisReimb.resolved?
            <>
            <button>Approve</button>
            <button>Deny</button>
            </>:
            <></>
        }

        </>
    )

}

export default ReimbDetailsComponent;