import React from 'react';
import './Header.css';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';

function Header() {
    return (
        <div className="header">
            <div className="header_icon">
                <EmailIcon />
                <p>farmmall@gmail.com</p>
            </div>
            <div className="header_icon">
                <FacebookIcon />
            </div>
        </div>
        
    )
}

export default Header;
