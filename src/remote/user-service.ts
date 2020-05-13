import { projectClient } from "./revaboards-client";

export async function getUsers(){
    try {
        let resp = await projectClient.get('/users')
        console.log(resp)
    } catch (e){
        console.log(e)
    }
}