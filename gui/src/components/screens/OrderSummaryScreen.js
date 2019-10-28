import React from 'react';
import { connect } from 'react-redux';
import Announcements from '../Announcements';
import Logo from '../Logo';
import '../style.css';
import history from '../../history';


class OrderSummary extends React.Component {
    previousScreen() {
        history.push('/builddrink');
    }

    render() {
        
        return (
            <div className="body">
                <div className="navigation-button" onClick={this.previousScreen}>Previous</div>
                <div>Ingredient One: {this.props.ingredientOne}</div>
                <div>Ingredient Two: {this.props.ingredientTwo}</div>
                <div>Ingredient Three: {this.props.ingredientThree}</div>
                <div>Ingredient Four: {this.props.ingredientFour}</div>
                <div>Ingredient Five: {this.props.ingredientFive}</div>
                <div>Ingredient Six: {this.props.ingredientSix}</div>
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