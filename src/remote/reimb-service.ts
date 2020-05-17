  
import { projectClient } from "./project-client";
import { NewReimbursement } from '../models/newReimb';
import { Reimbursement } from "../models/reimbs";
import Axios from "axios";


async function addNewReimb(newReimb: NewReimbursement) {
    let response = await projectClient.post('/reimbursements', newReimb);
    return await response.data;
}

async function getReimbs(){
    let response = await projectClient.get('/reimbursements');
    return await response.data;
}

async function updateReimb(){
    let response = await projectClient.post('/reimbursements');
    return await response.data;
}

async function getReimbDetails(reimbId: number) {
    let response = await projectClient.get(`/reimbursements/${reimbId}`);
    return await response.data;
}

async function getMyReimbs(userId: number){
    let response = await projectClient.get(`/reimbursements/user/${userId}`);
    return await response.data;
}
export {
    addNewReimb,
    getReimbs,
    updateReimb,
    getReimbDetails,
    getMyReimbs
}