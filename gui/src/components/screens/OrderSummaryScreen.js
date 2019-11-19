import React from 'react';
import { connect } from 'react-redux';
import Announcements from '../Announcements';
import Logo from '../Logo';
import CalorieCalculator from '../CalorieCalculator';
import '../style.css';
import history from '../../history';
import Cup from '../Cup';

class OrderSummary extends React.Component {
    previousScreen() {
        history.push('/builddrink');
    }
    nextScreen() {
        history.push('/finalizeorder');
    }

    render() {
        
        return (
            <div className="body">
                <div className="navigation-button" onClick={this.previousScreen}>Previous</div>
                <div className="grid-container">
                    <div className="sign-grid">
                        <CalorieCalculator />
                        <div className="finalize-grid">
                            <div className="navigation-button" onClick={this.nextScreen}>Finalize Order</div>
                        </div>
                    </div>
                    <div className="cup-grid">
                        <Cup />
                    </div>
                </div>
                
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

const mapStateToProps = state => {
    return {
        ingredientOne: state.drink.ingredientOne,
        ingredientTwo: state.drink.ingredientTwo,
        ingredientThree: state.drink.ingredientThree,
        ingredientFour: state.drink.ingredientFour,
        ingredientFive: state.drink.ingredientFive,
        ingredientSix: state.drink.ingredientSix
    }
}

export default connect(mapStateToProps, { })(OrderSummary);