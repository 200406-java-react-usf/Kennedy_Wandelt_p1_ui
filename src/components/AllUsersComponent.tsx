import React from 'react';
import './HomeComponent.css';
import { User } from '../models/user';
import { getUsers } from '../remote/user-service';

// interface IUsersProps {
//     authUser: User;
// }

function AllUsersComponent(props: any) {
    let allUsers = getUsers();
    console.log(allUsers);
    
    let userRows: any[] = [];

    // async getAllUsers

    // @ts-ignore
    // for(let user of allUsers) {
    //    userRows.push(
    //        <tr>
    //            <th scope="row">{user.ers_user_id}</th>
    //            <td>{user.first_name}</td>
    //            <td>{user.last_name}</td>
    //            <td>{user.username}</td>
    //            <td>{user.password}</td>
    //            <td>{user.email}</td>
    //            <td>{user.role_name}</td>
    //        </tr>
    //    ) 
    // }

    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Password</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {userRows}
                </tbody>
            </table>
        </>
    );

}

export default AllUsersComponent;