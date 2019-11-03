import React from 'react';
import history from '../../history';
import Announcements from '../Announcements';
import Logo from '../Logo';
import '../style.css'

class FinalizeOrderScreen extends React.Component {
    previousScreen() {
        history.push('/ordersummary');
    }
    nextScreen() {
        history.push('/ordercomplete');
    }
    render() {
        return (
            <div>
                <div className="navigation-button" onClick={this.previousScreen}>Previous</div>
                <div>Finalize Order</div>
                <div className="navigation-button" onClick={this.nextScreen}>Pay</div>
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

export default FinalizeOrderScreen;