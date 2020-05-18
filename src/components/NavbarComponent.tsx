import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../models/user';
import {logout} from '../remote/auth-service';

interface INavbarProps {
    authUser: User;
    setAuthUser: (user: User) => void
}


const NavbarComponent = (props: INavbarProps) => {
    console.log(props.authUser);

    let logoutUser = async () => {
        let authUser = await logout();
        //@ts-ignore
        props.setAuthUser(null as User);
    }

    return (
        <>
            <nav className="navbar navbar-expand-xl navbar-light bg-light">
                <Link className="navbar-brand" to="/home">ERS</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">                  
                    {props.authUser ?  
                        <li className="nav-item">
                            <Link className="nav-link" to="/my-reimbs">My Reimbursements</Link>
                        </li>:

                        <></>
                    }
                     {(props.authUser && props.authUser.role_name === 'admin')?
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Admin Dashboard
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link className="dropdown-item" to="/all-users">All Users</Link>
                            <Link className="dropdown-item" to="/new-user">Add New User</Link>
                            </div>
                        </li>:
                        <></>

                    } 
                    {(props.authUser && props.authUser.role_name === 'fmanager')?
                        <li className="nav-item">
                        <Link className="nav-link" to="/fmdash/reimb-all">Financial Dashboard</Link>
                    </li>:

                    <></>
                    }
                    </ul>
                </div>
                <>
                {!props.authUser ?
                    <div className="navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>:

                     <div className="navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" onClick={logoutUser}>Logout</a>
                            </li>
                        </ul>
                    </div>
                }
                </>
            </nav>
        </>
    );

}

export default NavbarComponent;