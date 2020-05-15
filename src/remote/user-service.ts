  
import { projectClient } from "./revaboards-client";
import { User } from '../models/user';

async function addNewUser(newUser: User) {
    let response = await projectClient.post('/users', newUser);
    return await response.data;
}

async function getUsers(){
    let response = await projectClient.get('/users');
    return await response.data;
}

export {
    addNewUser,
    getUsers
}