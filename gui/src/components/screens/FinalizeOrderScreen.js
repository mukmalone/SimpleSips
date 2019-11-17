import React from 'react';
import { connect } from 'react-redux';
import { orderDrink } from '../../actions';
import history from '../../history';
import Announcements from '../Announcements';
import Logo from '../Logo';
import '../style.css';
import Cup from '../Cup';
import Web3 from 'web3';
import { SimpleSips_Address, SimpleSips_Contract } from '../Contract/SimpleSips';

class FinalizeOrderScreen extends React.Component {
    state = { numberSmoothies: 1 };
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

    pay = async () => {
        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
        const accounts = await web3.eth.getAccounts()
        this.setState({ account: accounts[0] })
        const simpleSips = new web3.eth.Contract(SimpleSips_Contract, SimpleSips_Address)
        this.setState({ simpleSips })
        const buyDrink = await simpleSips.methods.buyDrink(this.props.userID, this.state.numberSmoothies, Date.now(), `${this.props.i1}`, `${this.props.i2}`, `${this.props.i3}`, `${this.props.i4}`, `${this.props.i5}`, `${this.props.i6}`).send({ from: this.state.account });
        this.nextScreen();
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
                    <div className="ingredient-control" onClick={this.decrementSmoothies}>-</div>
                    <div className="ingredient-control-text">{this.state.numberSmoothies}</div>
                    <div className="ingredient-control" onClick={this.incrementSmoothies}>+</div>
                </div>
                <div className="navigation-button" onClick={this.pay}>Pay</div>
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
        userID: state.user.userID,
        i1: state.drink.ingredientOne/10,
        i2: state.drink.ingredientTwo/10,
        i3: state.drink.ingredientThree/10,
        i4: state.drink.ingredientFour/10,
        i5: state.drink.ingredientFive/10,
        i6: state.drink.ingredientSix/10
    }
}

export default connect(mapStateToProps, { orderDrink })(FinalizeOrderScreen);