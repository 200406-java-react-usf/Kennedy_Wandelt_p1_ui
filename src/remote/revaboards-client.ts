import axios from 'axios';

export const projectClient = axios.create({
    baseURL: 'http://project1api-env.eba-2v5prypq.us-east-1.elasticbeanstalk.com',
    headers: {
        'Content-Type': 'application/json'
    }
})