import React from 'react';
import Logo from '../Logo';
import Announcements from '../Announcements';
import history from '../../history';
import '../style.css';

class OrderCompleteScreen extends React.Component {
    nextScreen() {
        history.push('/');
    }
    render() {
        return (
            <div>
                <h1>Your smoothie is on its way!</h1>
                <div>Cool facts on fruits/smoothies</div>
                <div className="picture-box">
                    <img className="pictures" alt="Drink 1" src={require('../images/drink-1.jpg')}></img>
                    <img className="pictures" alt="Drink 2" src={require('../images/drink-2.jpg')}></img>
                </div>
                <div className="navigation-button" onClick={this.nextScreen}>Home</div>
                <div className="grid-logo">
                    <Logo />
                </div>
                <div className="grid-announcements">
                    <Announcements />
                </div>
            </div>

        );
    }
}

export default OrderCompleteScreen;