
import React, { createElement } from 'react';
import {getUsers} from '../remote/user-service'

interface IUsersState {
    users: [];
}

let elements: [] = []

export class UserData extends React.Component<any, IUsersState> {
    constructor(props: any) {
        super(props);
        this.state = {
            users: []
        }
        console.log('Getting Users from DB...');

        let userData: [] = [];
        async () => {
            try{
                userData = await getUsers();
            } catch (e) {
                throw new Error('I cant get the data fro some reason')
            }
        }
    

        // this.setState({
        //     users: userData
        // })

        // for(let user of this.state.users) {
        //     console.log(user);
        // }
    }



    render() {
        return (
            <>
            {elements}
            </>
        )
    }
}