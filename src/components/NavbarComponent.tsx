import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../models/user';

interface INavbarProps {
    authUser: User;
}


const NavbarComponent = (props: INavbarProps) => {

    let dropDown = (e: any) => {
        e.currentTarget.setAttribute("dropdown", true);
    }


    return (
        <>
            <nav className="navbar navbar-expand-xl navbar-light bg-light">
                <a className="navbar-brand" href="/home">ERS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">                  
                    {props.authUser ?  
                        <li className="nav-item">
                            <a className="nav-link" href="/my-reimbs">My Reimbursements</a>
                        </li>:

                        <></>
                    }
                    {(props.authUser && props.authUser.role === 'admin')?
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Admin Dashboard
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>:
                        <></>
                    }
                    {(props.authUser && props.authUser.role === 'fmanager')?
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Financial Dashboard
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            </div>
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
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                        </ul>
                    </div>:

                     <div className="navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Logout</a>
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