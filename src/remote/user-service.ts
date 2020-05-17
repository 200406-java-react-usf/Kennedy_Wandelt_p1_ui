  
import { projectClient } from "./project-client";
import { NewUser } from '../models/newUser';

async function addNewUser(newUser: NewUser) {
    let response = await projectClient.post('/users', newUser);
    return await response.data;
}

async function getUsers(){
    let response = await projectClient.get('/users');
    return await response.data;
}

// async function updateUser(){
//     let response = await projectClient.
// }

export {
    addNewUser,
    getUsers
}