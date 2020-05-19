import React, { useState } from 'react';
import { User } from '../models/user';
import { makeStyles, Typography, FormControl, InputLabel, Input, Button, TextField, InputAdornment } from '@material-ui/core';
import { NewReimbursement } from '../models/newReimb';
import { addNewReimb } from '../remote/reimb-service';



interface INewReimbProps {
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

let NewReimbComponent = (props: INewReimbProps) => {
    const classes = useStyles();
    
    const [amount, setAmount] = useState('');
    const [submitted, setSubmitted] = useState(Date.now());
    const [description, setDescription] = useState('');
    const [author_id, setAuthId] = useState(props.authUser.ers_user_id);
    const [reimb_type_id, setType] = useState(1);
    const [reimb_status_id, setStatus] = useState(1);
    const [errorMessage, setErrorMessage] = useState('');

    let updateField = (e: any) => {
        switch (e.currentTarget.id) {
            case 'description':
                setDescription(e.target.value);
                break;
            case 'amount':
                setAmount(e.target.value);
                break;
            default:
                console.warn(`Improper binding detected on element with id: ${e.currentTarget.id}`); 
        }
    }

    let updateType = (e: any) => {
        setType(e.currentTarget.value);
    }

    let submit = async () => {
        if(amount === '' || description === ''){
            setErrorMessage('All fields are required to create a new user')
        }
        let user = new NewReimbursement(+amount, Date.now(), description, author_id, reimb_status_id, +reimb_type_id);

        let newUser = await addNewReimb(user);
    }

    return (
        <>
        <div className={classes.loginContainer}>
            <form className={classes.loginForm}>
                <Typography align="left" variant="h4">New Reimbursement</Typography>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="amount">Amount</InputLabel>
                    <Input 
                        onChange={updateField} 
                        value={amount} 
                        id="amount" type="text" 
                        placeholder="Amount"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>} />
                </FormControl>

                <TextField margin="normal" fullWidth label="Description" 
                onChange={updateField} value={description} variant="outlined" 
                id="description" multiline/>
                
                <p></p>
                <span>Reimbursement Type</span>
                <FormControl fullWidth>
                    <InputLabel shrink htmlFor="age-native-label-placeholder"></InputLabel>
                    <select value={reimb_type_id} onChange={updateType}>
                        <option value={1}>Lodging</option>
                        <option value={2}>Travel</option>
                        <option value={3}>Food</option>
                        <option value={4}>Other</option>
                    </select>
                </FormControl>

                <br/><br/>
                <Button onClick={submit} variant="contained" color="primary" size="medium">Submit Reimbursement Request</Button>
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

export default NewReimbComponent;