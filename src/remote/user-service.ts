  
import { projectClient } from "./project-client";
import { NewUser } from '../models/newUser';
import Axios from "axios";
import { User } from "../models/user";


async function addNewUser(newUser: NewUser) {
    let response = await projectClient.post('/users', newUser);
    return await response.data;
}

async function getUsers(){
    let response = await projectClient.get('/users', {withCredentials: true});
    return await response.data;
}

async function updateUser(newUser: User){
    let userString = JSON.stringify(newUser);
    let userJson = JSON.parse(userString);

    let response = await projectClient.put('/users', userJson);
    return await response.data;
}

async function deleteUser(userId: number){
    let userString = JSON.stringify(userId);
    let userJSON = JSON.parse(userString);
    
    let response = await projectClient.delete('/users', userJSON);
    return await response.data;
}

export {
    addNewUser,
    getUsers,
    updateUser, 
    deleteUser
}