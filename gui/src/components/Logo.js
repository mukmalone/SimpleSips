import React from 'react';
import './style.css';

class Logo extends React.Component {
    render() {
        return (
            <div className="logo-box">
                <img className="logo" alt="Logo" src={require('./images/logo.jpg')}></img>
            </div>
            );
    }
}

export default Logo;