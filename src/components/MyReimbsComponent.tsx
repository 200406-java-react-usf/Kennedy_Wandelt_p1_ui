import React, { useEffect, useState } from 'react';
import { User } from '../models/user';
import { Reimbursement } from '../models/reimbs'
import { getMyReimbs, getReimbDetails } from '../remote/reimb-service';
import { Redirect, Link } from 'react-router-dom';




interface IMyReimbsProps {
    authUser: User
    setThisReimb: (reimb: Reimbursement) => void 
}

let MyReimbsComponent = (props: IMyReimbsProps) => {
    //@ts-ignore
    const [reimbs, setReimbs] = useState([] as Reimbursement[]);


    let reimbRows: any[] = [];

    useEffect(() => {
        let fetchData = async () => {

            const response = await getMyReimbs(props.authUser.ers_user_id);
            for (let reimb of response){
                reimbRows.push(
                    <tr key = {reimb.reimb_id}>

                        <th scope="row">
                            <Link to={`/edash/reimb-details-${reimb.reimb_id}`} onClick={ async () => {
                            const response = await getReimbDetails(reimb.reimb_id);
                            props.setThisReimb(response);
                            }}>{reimb.reimb_id}</Link>
                        </th>

                        <td>{reimb.amount}</td>
                        <td>{reimb.submitted}</td>
                        <td>{reimb.resolved}</td>
                        <td>{reimb.description}</td>
                        <td>{reimb.author_id}</td>
                        <td>{reimb.resolver_id}</td>
                        <td>{reimb.reimb_status}</td>
                        <td>{reimb.reimb_type}</td>
                    </tr>
                )
            }

            setReimbs(reimbRows)
        };

        fetchData()
    }, []);

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
                        <th scope="col">Status</th>
                        <th scope="col">Type</th>

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

export default MyReimbsComponent;