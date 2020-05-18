import React, { useEffect, useState } from 'react';
import { User } from '../models/user';
import { Reimbursement } from '../models/reimbs'
import { getReimbs, getReimbDetails } from '../remote/reimb-service';
import { Redirect, Link } from 'react-router-dom';



interface IAllReimbsProps {
    authUser: User
    setThisReimb: (reimb: Reimbursement) => void 
}

let AllReimbsComponent = (props: IAllReimbsProps) => {

    //@ts-ignore
    const [reimbs, setReimbs] = useState([] as Reimbursement[]);

    // let toDetails = (reimbId: number) => {
    //     let getReimb = async (id: number) => {
    //         const response = await getReimbDetails(id);

    //         props.setThisReimb(response);
    //     }

    //     getReimb(reimbId);
    //     <Redirect to={`/details-${reimbId}`}/>
    // }


    let reimbRows: any[] = [];

    useEffect(() => {
        let fetchData = async () => {

            const response = await getReimbs();
            for (let reimb of response){
                reimbRows.push(
                <tr key={reimb.reimb_id}>
                    
                        <th scope="row"><Link to={`/details-${reimb.reimb_id}`}><Link to='' onClick={ async () => {
                                const response = await getReimbDetails(reimb.reimb_id);
                                props.setThisReimb(response);
                        }}>{reimb.reimb_id}</Link></Link></th>

                        <td>{reimb.amount}</td>
                        <td>{reimb.submitted}</td>
                        <td>{reimb.resolved? reimb.resolved: <Link to={'/'}>resolve</Link>}</td>
                        <td>{reimb.description}</td>
                        <td>{reimb.author_id}</td>
                        <td>{reimb.resolver_id? reimb.resolver_id: <>N/A</>}</td>
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

export default AllReimbsComponent;