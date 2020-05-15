import React, {useState} from 'react';
import {Typography, FormControl, InputLabel, Input, Button, NativeSelect, makeStyles} from '@material-ui/core';
import { registerUser } from '../remote/user-service';
import { User } from '../models/user';


export interface IRegProps {
    authUser: User
}

const useStyles = makeStyles({
    loginContainer: {
        display: "flex",
        justifyContent: "center",
        margin: 20,
        marginTop: 40,
        padding: 20
    },
    loginForm: {
        width: "50%"
    }
});


function NewUserComponent (props: IRegProps) {

    const classes = useStyles();

    const [id, setId] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    let updateUsername = (e: any) => {
        setUsername(e.currentTarget.value);
    }

    let updatePassword = (e: any) => {
        setPassword(e.currentTarget.value);
    }

    let updateFirstName = (e: any) => {
        setFirstName(e.currentTarget.value);
    }

    let updateLastName = (e: any) => {
        setLastName(e.currentTarget.value);
    }

    let updateEmail = (e: any) => {
        setEmail(e.currentTarget.value);
    }

    let updateRole = (e: any) => {
        setRole(e.currentTarget.value);
    }

    let updateErrorMessage = (e: any) => {
        setErrorMessage(e.currentTarget.value);
    }
    

    let register = async () => {
        if(username === '' || password === '' || firstname === '' || lastname === '' || email === ''){
            setErrorMessage('All fields are required to register')
        }
        let user = new User(id, username, password, firstname, lastname, email, role);
        let newUser = await registerUser(user);
    }

    return (
        <>
        <div className={classes.loginContainer}>
            <form className={classes.loginForm}>
                <Typography align="center" variant="h4">Revaboards Registration</Typography>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="firstname">First Name</InputLabel>
                    <Input 
                        onChange={updateFirstName} 
                        value={firstname} 
                        id="firstname" type="text" 
                        placeholder="First Name" />
                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="lastname">Last Name</InputLabel>
                    <Input 
                        onChange={updateLastName} 
                        value={lastname} 
                        id="lastname" type="text" 
                        placeholder="Last Name" />
                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="username">Username</InputLabel>
                    <Input 
                        onChange={updateUsername} 
                        value={username} 
                        id="username" type="text" 
                        placeholder="Username" />
                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input 
                        onChange={updatePassword}
                        value={password}
                        id="password" type="password"
                        placeholder="password"/>
                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input 
                        onChange={updateEmail} 
                        value={email} 
                        id="email" type="text" 
                        placeholder="Email" />


                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <InputLabel shrink htmlFor="age-native-label-placeholder">Role</InputLabel>

                    <NativeSelect value={role} onClick={updateRole} inputProps={{name: 'role', id: 'role-selector',}}>
                        <option value={'1'}>Employee</option>
                        <option value={'2'}>Financial Manager</option>
                        <option value={'3'}>Admin</option>
                    </NativeSelect>
                </FormControl>

                <br/><br/>
                <Button onClick={register} variant="contained" color="primary" size="medium">Register</Button>
                <br/><br/>
                {
                    errorMessage 
                        ? 
                    <span style={{color:"red"}}>{errorMessage}</span>
                        :
                    <></>
                }
            </form>
        </div>
        </>
    );

}

export default {
    NewUserComponent,
}