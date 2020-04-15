import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './app/assets/logo3'; // gives image path

const Logo = (props) => {
    return (<NavLink to="/" id='logolink'><span className='logoContainer'>
        <img src={logo} alt="this is car image" />
                            UnlimitList
            </span></NavLink>
            )
}
export default Logo; 