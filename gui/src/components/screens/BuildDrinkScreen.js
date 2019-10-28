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
                <h1>Welcome (name)!</h1>
                <h1>Choose your ingredients</h1>

                <div className="grid-container">
                    <IngredientControl class="ingredientOne" src={require('../images/strawberry.jpg')} id="Strawberry" />
                    <IngredientControl class="ingredientTwo" src={require('../images/kiwi.jpg')} id="Kiwi" />
                    <IngredientControl class="ingredientThree" src={require('../images/blueberry.jpg')} id="Blueberry" />
                    <IngredientControl class="ingredientFour" src={require('../images/mango.jpg')} id="Mango" />
                    <IngredientControl class="ingredientFive" src={require('../images/banna.jpg')} id="Banna" />
                    <IngredientControl class="ingredientSix" src={require('../images/grapes.jpg')} id="Grapes" />
                </div>
                <div className="grid-container">
                    <div className="grid-status">
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
    return ({ recipeTotal: state.drink.recipeTotal });
    
}

export default connect(mapStateToProps, {})(BuildDrinkScreen);