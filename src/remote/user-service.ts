  
import { revaboardsClient } from "./revaboards-client";
import { User } from '../models/user';

export async function registerUser(newUser: User) {
    let response = await revaboardsClient.post('/users', newUser);
    return await response.data;
}