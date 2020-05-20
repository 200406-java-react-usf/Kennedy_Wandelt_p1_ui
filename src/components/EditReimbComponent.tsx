import React, { useState } from 'react';
import { User } from '../models/user';
import { makeStyles, Typography, FormControl, InputLabel, Input, Button, TextField, InputAdornment } from '@material-ui/core';
import { NewReimbursement } from '../models/newReimb';
import { addNewReimb, updateReimb } from '../remote/reimb-service';
import { Reimbursement } from '../models/reimbs';
import { Link } from 'react-router-dom';



interface IEditReimbProps {
    authUser: User
    editReimb: Reimbursement
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

let EditReimbComponent = (props: IEditReimbProps) => {
    const classes = useStyles();
    
    const [amount, setAmount] = useState(props.editReimb.amount);
    const [description, setDescription] = useState(props.editReimb.description);
    const [reimb_type_id, setType] = useState(props.editReimb.reimb_type);
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

    let change = async () => {
        let type = reimb_type_id;
        switch (reimb_type_id){
            case 'lodging':
                type = '1';
                break;
            case 'travel':
                type = '2';
                break;
            case 'food':
                type = '3';
                break;
            case 'other':
                type = '4';
                break;
        }
        let reimb = new Reimbursement(props.editReimb.reimb_id, +amount, Date.now(), null, description, props.editReimb.author_id, null, '1', type);
        let newReimb = await updateReimb(reimb);
    }

    return (
        <>
        <div style={{ marginTop: 0, marginLeft: '28%', marginRight: '28%', marginBottom: '13%', backgroundColor:'rgba(255, 255, 255, 0.651)'}} className='border-radius'>
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
                <Link onClick={change} to='/edash/my-reimbs' className="btn btn-primary btn-m" role="button" style={{color: 'white', backgroundColor: "#3340a1", borderColor: "#3340a1"}}>Save changes</Link>
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

export default EditReimbComponent;