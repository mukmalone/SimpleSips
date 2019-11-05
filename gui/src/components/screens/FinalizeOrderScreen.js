import React from 'react';
import { connect } from 'react-redux';
import { orderDrink } from '../../actions';
import history from '../../history';
import Announcements from '../Announcements';
import Logo from '../Logo';
import '../style.css';
import Cup from '../Cup';

class FinalizeOrderScreen extends React.Component {
    state = { numberSmoothies: 0 };
    incrementSmoothies = () => {
        let result = this.state.numberSmoothies + 1;
        this.setState({ numberSmoothies: result });
    }

    decrementSmoothies = () => {
        if (this.state.numberSmoothies > 0) {
            let result = this.state.numberSmoothies - 1;
            this.setState({ numberSmoothies: result });
        }
    }

    previousScreen() {
        history.push('/ordersummary');
    }
    nextScreen = () => {
        this.props.orderDrink(this.state.numberSmoothies);
        history.push('/ordercomplete');
    }
    render() {
        return (
            <div>
                <div className="navigation-button" onClick={this.previousScreen}>Previous</div>
                <div>Finalize Order</div>
                <Cup />
                <div>
                    <div className="ingredient-control" onClick={this.incrementSmoothies}>+</div>
                    <div className="ingredient-control-text">{this.state.numberSmoothies}</div>
                    <div className="ingredient-control" onClick={this.decrementSmoothies}>-</div>
                </div>
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

export default connect(null, { orderDrink })(FinalizeOrderScreen);