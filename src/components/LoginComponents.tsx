import React, { SyntheticEvent } from 'react';
import './LoginComp.css';
import {login} from '../remote/auth-service';
//import TypoGraphy from '@material-ui/core/Typography';

interface ILoginState {
    username: string;
    password: string;
    errorMessage: string;
}

export class LoginComponent extends React.Component<any, ILoginState> {
    
    constructor(props: any) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errorMessage: ''
        }
    }

    updateUsername = (e: any) => {
        this.setState({
            username: e.currentTarget.value
        })
    }

    updatePassword = (e: any) => {
        this.setState({
            password: e.currentTarget.value
        })
    }

    login = async (e: SyntheticEvent) => {
        if(this.state.username === '' || this.state.password === ''){
            this.setState({
                errorMessage: 'Both username and password fields must be entered'
            })
        } else{
            this.setState({
                errorMessage: ''
            })
            login(this.state.username, this.state.password);
            console.log('Username: ', this.state.username, '\nPassword: ', this.state.password)
            this.setState({
                username: ''
            })
            this.setState({
                password: ''
            })
        }       
    }

    render() {
        return (
            <>
                <form>
                <h1>Login</h1>
                <div className="alert alert-secondary">
                    <div className='input-text'>
                    <span>Username: </span>
                    <input type="text" id="username" value={this.state.username} onChange={this.updateUsername}></input>
                    </div>
                    <div className='input-text'>
                    <span>Password: </span>
                    <input type="password" id="password" value={this.state.password} name="password" onChange={this.updatePassword}></input>
                    </div>
                    <br></br>
                    <button type="button" className="btn btn-dark" onClick={this.login}>Login</button>
                    <span id='alert-message'>{this.state.errorMessage}</span>
                </div>   
                </form>
            </>
        );
    }
}