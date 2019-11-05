import React from 'react';
import { connect } from 'react-redux';
import Logo from '../Logo';
import Announcements from '../Announcements';
import history from '../../history';
import '../style.css';

class OrderCompleteScreen extends React.Component {
    nextScreen() {
        history.push('/');
    }

    renderConent() {
        if (this.props.numberSmoothies > 1) {
            return (<h1>Your {this.props.numberSmoothies} smoothies are on their way!</h1>)
        } else {
            return (<h1>Your {this.props.numberSmoothies} smoothie is on its way!</h1>)
        }
    }

    render() {
        return (
            <div>
                {this.renderConent()}
                <h2>Cool facts on fruits/smoothies</h2>
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

const mapStateToProps = state => {
    return {
        numberSmoothies: state.drink.numberSmoothies
    }
}

export default connect(mapStateToProps, {})(OrderCompleteScreen);