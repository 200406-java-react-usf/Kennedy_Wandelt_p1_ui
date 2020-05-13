import { projectClient } from "./revaboards-client";

export async function login(username: string, password: string){
    try {
        let resp = await projectClient.post('/')
        console.log(resp)
    } catch (e){
        console.log(e)
    }
}
