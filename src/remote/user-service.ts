import { projectClient } from "./revaboards-client";

export async function getUsers(){
    try {
        let resp = await projectClient.get('/users')
        return resp.data;
    } catch (e){
        console.log(e)
    }
}