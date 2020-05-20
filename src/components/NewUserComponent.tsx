import React, {useState} from 'react';
import {Typography, FormControl, InputLabel, Input, Button, NativeSelect, makeStyles} from '@material-ui/core';
import { addNewUser } from '../remote/user-service';
import { User } from '../models/user';
import { NewUser } from '../models/newUser'
import { Redirect } from 'react-router-dom';


export interface IRegProps {
    authUser: User,
    newUser: NewUser | undefined,
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

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('1');
    const [errorMessage, setErrorMessage] = useState('');

    let updateField = (e: any) => {
        switch (e.currentTarget.id) {
            case 'firstname':
                setFirstName(e.target.value);
                break;
            case 'lastname':
                setLastName(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'username':
                setUsername(e.target.value);
                break;  
            case 'password':
                setPassword(e.target.value);
                break;
            default:
                console.warn(`Improper binding detected on element with id: ${e.currentTarget.id}`); 
        }
    }

    let updateRole = (e: any) => {
        setRole(e.currentTarget.value);
        console.log(role)
    }

    let updateErrorMessage = (e: any) => {
        setErrorMessage(e.currentTarget.value);
    }
    

    let register = async () => {
        if(username === '' || password === '' || firstname === '' || lastname === '' || email === ''){
            setErrorMessage('All fields are required to create a new user')
        }
        let user = new NewUser(username, password, firstname, lastname, email, +role);

        let newUser = await addNewUser(user);
    }

    return (
        <>
        <div style={{ marginTop: 0, marginLeft: '28%', marginRight: '28%', marginBottom: '13%', backgroundColor:'rgba(255, 255, 255, 0.651)'}}>
        <div className={classes.loginContainer}>
            <form className={classes.loginForm}>
                <Typography align="left" variant="h4">New User</Typography>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="firstname">First Name</InputLabel>
                    <Input 
                        onChange={updateField} 
                        value={firstname} 
                        id="firstname" type="text" 
                        placeholder="First Name" />
                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="lastname">Last Name</InputLabel>
                    <Input 
                        onChange={updateField} 
                        value={lastname} 
                        id="lastname" type="text" 
                        placeholder="Last Name" />
                </FormControl>
                

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="username">Username</InputLabel>
                    <Input 
                        onChange={updateField} 
                        value={username} 
                        id="username" type="text" 
                        placeholder="Username" />
                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input 
                        onChange={updateField}
                        value={password}
                        id="password" type="password"
                        placeholder="password"/>
                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input 
                        onChange={updateField} 
                        value={email} 
                        id="email" type="text" 
                        placeholder="Email" />
                </FormControl>

                <p></p>
                <span>Role</span>
                <FormControl fullWidth>
                    <InputLabel shrink htmlFor="age-native-label-placeholder"></InputLabel>
                    <select value={role} onChange={updateRole}>
                        <option value={3}>Employee</option>
                        <option value={2}>Financial Manager</option>
                        <option value={1}>Admin</option>
                    </select>
                </FormControl>

                <br/><br/>
                <Button onClick={register} variant="contained" color="primary" size="medium">Create User</Button>
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
        </div>
        </>
    );

}

export default NewUserComponent