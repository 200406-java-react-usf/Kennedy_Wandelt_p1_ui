import React, { useEffect, useState } from 'react';
import { User } from '../models/user';
import { Reimbursement } from '../models/reimbs'
import { getReimbs, getReimbDetails } from '../remote/reimb-service';
import { Redirect, Link } from 'react-router-dom';
import { InputLabel } from '@material-ui/core';



interface IAllReimbsProps {
    authUser: User
    setThisReimb: (reimb: Reimbursement) => void 
}

let AllReimbsComponent = (props: IAllReimbsProps) => {

    //@ts-ignore
    const [reimbs, setReimbs] = useState([] as Reimbursement[]);
    const [status, setStatus] = useState('all');
    const [type, setType] = useState('all');

    let updateStatus = (e: any) => {
        setStatus(e.currentTarget.value);
    }

    let updateType = (e: any) => {
        setType(e.currentTarget.value);
    }


    let reimbRows: any[] = [];

    useEffect(() => {
        let fetchData = async () => {

            const response = await getReimbs();
            for (let reimb of response){
                if((reimb.reimb_type === type || type === 'all') && (reimb.reimb_status === status || status === 'all')){
                    reimbRows.push(
                    <tr key={reimb.reimb_id}>
                        
                            <th scope="row"><Link to={`/fmdash/reimb-details-${reimb.reimb_id}`} onClick={ async () => {
                                    const response = await getReimbDetails(reimb.reimb_id);
                                    props.setThisReimb(response);
                            }}>{reimb.reimb_id}</Link></th>

                            <td>{reimb.amount}</td>
                            <td>{reimb.submitted}</td>
                            <td>{reimb.resolved? reimb.resolved: <Link to={`/fmdash/reimb-details-${reimb.reimb_id}`}>resolve</Link>}</td>
                            <td>{reimb.description}</td>
                            <td>{reimb.author_id}</td>
                            <td>{reimb.resolver_id? reimb.resolver_id: <>N/A</>}</td>
                            <td>{reimb.reimb_status}</td>
                            <td>{reimb.reimb_type}</td>
                    </tr>
                    )
                }
            }

            setReimbs(reimbRows)
        };

        fetchData()
    }, [type, status]);

    return (
        !props.authUser?
        <Redirect to='/login'/>:
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Time Submitted</th>
                        <th scope="col">Time Resolved</th>
                        <th scope="col">Description</th>
                        <th scope="col">Author #</th>
                        <th scope="col">Resolver #</th>
                        <th scope="col"><InputLabel shrink htmlFor="age-native-label-placeholder"></InputLabel>
                        <select value={status} onChange={updateStatus}>
                            <option value={'all'}>All</option>
                            <option value={'pending'}>Pending</option>
                            <option value={'approved'}>Approved</option>
                            <option value={'denied'}>Denied</option>
                        </select></th>
                        <th scope="col"><InputLabel shrink htmlFor="age-native-label-placeholder"></InputLabel>
                        <select value={type} onChange={updateType}>
                            <option value={'all'}>All</option>
                            <option value={'lodging'}>Lodging</option>
                            <option value={'travel'}>Travel</option>
                            <option value={'food'}>Food</option>
                            <option value={'other'}>Other</option>
                        </select></th>

                    </tr>
                </thead>
                <tbody>
                    {reimbs.length === 0?
                    <h5>No reimbursements found</h5>:
                    reimbs}
                </tbody>
            </table>
        </>
    );

}

export default AllReimbsComponent;