import React from 'react';
import { User } from '../models/user';
import { Reimbursement } from '../models/reimbs';
import { resolve } from 'dns';
import { updateReimb } from '../remote/reimb-service';
import { Link } from 'react-router-dom';

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
        <div style={{ marginTop: 0, marginLeft: '28%', marginRight: '28%', marginBottom: '13%', backgroundColor:'rgba(255, 255, 255, 0.651)'}} className='border-radius'>
        <h1>{header}</h1>
        <div>
        <p>
            <span>Amount: $</span><span>{props.thisReimb.amount}</span>
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
            <Link onClick={approveReimb} to='/fmdash/reimb-all' className="btn btn-primary btn-m" role="button" style={{color: 'white', backgroundColor: "#387341", borderColor: "#387341"}}>Approve</Link>
            <Link onClick={denyReimb} to='/fmdash/reimb-all' className="btn btn-primary btn-m" role="button" style={{color: 'white', backgroundColor: "#e00d0d", borderColor: "#e00d0d"}}>Deny</Link>
            </>:
            <></>
        }
        {props.thisReimb.reimb_status === 'pending' && props.authUser.ers_user_id == props.thisReimb.author_id?
            <td><Link to={'/'}>edit</Link></td>:
            <></>
        }
        </div>
        </>
    )

}

export default ReimbDetailsComponent;