import React from 'react';
import {getUsers} from '../remote/user-service'

interface IUsersState {
    users: [];
}

export class UserTable extends React.Component<any, IUsersState> {
    constructor(props: any) {
        super(props);
        this.state = {
            users: []
        }
    }

    render() {
        return (
            <>
            <div>
            <button>Home</button>
            <h1 onClick={getUsers}>Users</h1>
            </div>
            <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
        </>
        )
    }
}