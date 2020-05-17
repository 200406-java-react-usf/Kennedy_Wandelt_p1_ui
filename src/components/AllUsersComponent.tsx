import React, {useEffect, useState} from 'react';
import './HomeComponent.css';
import { User } from '../models/user';
import { getUsers } from '../remote/user-service';


// interface IUsersProps {
//     authUser: User;
// }

let AllUsersComponent = (props: any) => {
    //@ts-ignore
    const [users, setUsers] = useState([] as User[]);


    let userRows: any[] = [];

    useEffect(() => {
        let fetchData = async () => {

            const response = await getUsers();
            for (let user of response){
                userRows.push(
                    <tr>
                        <th scope="row">{user.ers_user_id}</th>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                        <td>{user.email}</td>
                        <td>{user.role_name}</td>
                    </tr>
                )
            }

            setUsers(userRows)
        };

        fetchData()
    }, []);



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
                    {users}
                </tbody>
            </table>
        </>
    );

}

export default AllUsersComponent;