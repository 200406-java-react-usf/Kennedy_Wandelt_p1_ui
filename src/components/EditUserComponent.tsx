import React, {useState} from 'react';
import {Typography, FormControl, InputLabel, Input, Button, makeStyles} from '@material-ui/core';
import { updateUser } from '../remote/user-service';
import { User } from '../models/user';
import { Link, Redirect } from 'react-router-dom';


export interface IEditUserProps {
    authUser: User,
    editUser: User
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


let EditUserComponent = (props: IEditUserProps) => {

    const classes = useStyles();

    let editUserRole = props.editUser.role_name

    switch (editUserRole) {
        case 'employee':
            editUserRole = '3';
            break;
        case 'fmanager':
            editUserRole = '2';
            break;
        case 'admin':
            editUserRole = '1';
            break;
        default:
            console.warn('Dont do it');
    }


    const [username, setUsername] = useState(props.editUser.username);
    const [password, setPassword] = useState(props.editUser.password);
    const [firstname, setFirstName] = useState(props.editUser.first_name);
    const [lastname, setLastName] = useState(props.editUser.last_name);
    const [email, setEmail] = useState(props.editUser.email);
    const [role, setRole] = useState(editUserRole);
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
    

    let change = async () => {
        let user = new User(props.editUser.ers_user_id, username, password, firstname, lastname, email, role);
        console.log(user);
        let newUser = await updateUser(user);
    }

    return (
        !props.authUser?
        <Redirect to='/login'/>:
        <>
        <div style={{ marginTop: 0, marginLeft: '28%', marginRight: '28%', marginBottom: '13%', backgroundColor:'rgba(255, 255, 255, 0.651)'}} className='border-radius'>
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
                        <option value={'3'}>Employee</option>
                        <option value={'2'}>Financial Manager</option>
                        <option value={'1'}>Admin</option>
                    </select>
                </FormControl>

                <br/><br/>
                <Link onClick={change} to='/adash/all-users' className="btn btn-primary btn-m" role="button" style={{color: 'white', backgroundColor: "#3340a1", borderColor: "#3340a1"}}>Save changes</Link>
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

export default EditUserComponent