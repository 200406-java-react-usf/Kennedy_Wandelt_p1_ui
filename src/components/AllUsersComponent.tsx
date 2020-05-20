import React, {useEffect, useState} from 'react';
import './HomeComponent.css';
import { User } from '../models/user';
import { getUsers, deleteUser } from '../remote/user-service';
import { Redirect, Link } from 'react-router-dom';



interface IUsersProps {
    authUser: User;
    setEditUser: (user: User) => void;
}

let AllUsersComponent = (props: IUsersProps) => {
    //@ts-ignore
    const [users, setUsers] = useState([] as User[]);


    let userRows: any[] = [];

    useEffect(() => {
        let fetchData = async () => {

            const response = await getUsers();
            for (let user of response){
                userRows.push(
                    <tr key = {user.ers_user_id}>
                        <th scope="row">{user.ers_user_id}</th>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                        <td>{user.email}</td>
                        <td>{user.role_name}</td>
                        <td><Link to={'/adash/edit-user'} onClick={ () => {
                            props.setEditUser({...user})}}>edit</Link>
                            <span> / </span>
                            <Link to={'/adash/all-users'} onClick={ async () => {
                            await deleteUser(user.ers_user_id);    
                            }} >delete</Link>
                        </td>
                    </tr>
                )
            }

            setUsers(userRows)
        };

        fetchData()
    }, []);



    return (
        !props.authUser?
        <Redirect to='/login'/>:
        <>
        <div style={{ marginTop: 0, marginLeft: '3%', marginRight: '3%', marginBottom: '13%', backgroundColor:'rgba(255, 255, 255, 0.651)'}}>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Password</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope='col'> </th>
                    </tr>
                </thead>
                <tbody>
                    {users}
                </tbody>
            </table>
        </div>
        </>
    );

}

export default AllUsersComponent;