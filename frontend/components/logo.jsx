import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import logo from './logo.jpg'; // Tell webpack this JS file uses this image
// /Users/nicolesamanich/Desktop/unlimitlist/frontend/components/logo.jpg
// /Users/nicolesamanich/Desktop/unlimitlist/frontend/components/logo.jsx

const Logo = (props) => {
    return (<NavLink to="/" id='logolink'>
        <span className='logoContainer'>
            {/* <img src={logo} alt="logo" /> */}
            UnlimitList
        </span>
        </NavLink>
            )
}
export default Logo; 