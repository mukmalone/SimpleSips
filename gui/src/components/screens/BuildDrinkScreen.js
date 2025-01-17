import React from 'react';
import '../style.css';
import { connect } from 'react-redux';
import Announcements from '../Announcements';
import Logo from '../Logo';
import IngredientControl from '../IngredientControl';
import DrinkGauge from '../DrinkGauge';
import history from '../../history';

class BuildDrinkScreen extends React.Component {

    previousScreen() {
        history.push('/');
    }
    recommendationScreen() {
        history.push('/recommendation');
    }
    nextScreen() {
        history.push('/ordersummary');
    }
    renderDrinkStatus() {
        if (this.props.recipeTotal === 100) {
            return <div className="navigation-button" onClick={this.nextScreen}>Next</div>;
        } else {
            return (<DrinkGauge recipeTotal={this.props.recipeTotal} />);
        }
    }

    render() {
        return (
            <div className="body">
                <div className="navigation-button" onClick={this.previousScreen}>Previous</div>
                <div className="navigation-button-right" onClick={this.recommendationScreen}>Recommend me something!!</div>
                <h2>Welcome {this.props.userName}!</h2>
                <h2>Choose your ingredients</h2>
                <div className="grid-container">
                    <IngredientControl class="ingredientOne" src={require('../images/strawberry.jpg')} id={`${this.props.i1Name}`} />
                    <IngredientControl class="ingredientTwo" src={require('../images/kiwi.jpg')} id={`${this.props.i2Name}`} />
                    <IngredientControl class="ingredientThree" src={require('../images/blueberry.jpg')} id={`${this.props.i3Name}`} />
                    <IngredientControl class="ingredientFour" src={require('../images/mango.jpg')} id={`${this.props.i4Name}`} />
                    <IngredientControl class="ingredientFive" src={require('../images/banna.jpg')} id={`${this.props.i5Name}`} />
                    <IngredientControl class="ingredientSix" src={require('../images/blackberry.jpg')} id={`${this.props.i6Name}`} />
                </div>
                <div className="grid-container">
                    <div className="grid-status gauge">
                        {this.renderDrinkStatus()}
                    </div>
                    <div className="grid-logo">
                        <Logo />
                    </div>
                    <div className="grid-announcements">
                        <Announcements />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return (
        {
            userID: state.user.userID,
            userName: state.user.userName,
            recipeTotal: state.drink.recipeTotal,
            i1Name: state.drink.ingredientOneName,
            i2Name: state.drink.ingredientTwoName,
            i3Name: state.drink.ingredientThreeName,
            i4Name: state.drink.ingredientFourName,
            i5Name: state.drink.ingredientFiveName,
            i6Name: state.drink.ingredientSixName
        }
    );  
}

export default connect(mapStateToProps, {})(BuildDrinkScreen);