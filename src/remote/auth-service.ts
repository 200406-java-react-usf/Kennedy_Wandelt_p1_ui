  
import { projectClient } from "./revaboards-client";

async function authenticate(username: string, password: string) {
    let response = await projectClient.post('/auth', {username, password});
    return await response.data;
}

async function logout(){
    let response = await projectClient.get('/auth');
    return await response;
}

export {
    authenticate,
    logout
}
