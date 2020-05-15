  
import { revaboardsClient } from "./revaboards-client";

async function authenticate(username: string, password: string) {
    let response = await revaboardsClient.post('/auth', {username, password});
    return await response.data;
}

async function logout(){
    let response = await revaboardsClient.get('/auth');
    return response;
}

export {
    authenticate,
    logout
}
