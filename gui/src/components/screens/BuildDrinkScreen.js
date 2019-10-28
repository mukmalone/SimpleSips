import React from 'react';
import '../style.css';
import { connect } from 'react-redux';
import Announcements from '../Announcements';
import Logo from '../Logo';
import IngredientControl from '../IngredientControl';
import DrinkGauge from '../DrinkGauge';

class BuildDrinkScreen extends React.Component {
    state = {
        recipeTotal: 0,
        ingredientOneTotal: 0,
        ingredientTwoTotal: 0,
        incredientThreeTotal: 0,
        ingredientFourTotal: 0,
        ingredientFiveTotal: 0,
        ingredientSixTotal: 0
    };

    incrementRecipeTotal = (ingredientTotal, item) => {
        console.log(ingredientTotal + " " + item);
        if (item = "grid-item1") {
            this.setState({ ingredientOneTotal: ingredientTotal });
        } else if (item = "grid-item2") {
            this.setState({ ingredientTwoTotal: ingredientTotal });
        } else if (item = "grid-item3") {
            this.setState({ ingredientThreeTotal: ingredientTotal });
        } else if (item = "grid-item4") {
            this.setState({ ingredientFourTotal: ingredientTotal });
        } else if (item = "grid-item5") {
            this.setState({ ingredientFiveTotal: ingredientTotal });
        } else if (item = "grid-item6") {
            this.setState({ ingredientSixTotal: ingredientTotal });
        }
        let recipeTotal = this.state.ingredientOneTotal + this.state.ingredientTwoTotal + this.state.incredientThreeTotal + this.state.ingredientFourTotal + this.state.ingredientFiveTotal + this.state.ingredientSixTotal;
        console.log(recipeTotal);
        console.log(this.state);
        this.setState({ recipeTotal });
    }

    render() {
        return (
            <div className="body">
                <h1>Welcome (name)!</h1>
                <h1>Choose your ingredients</h1>

                <div className="grid-container">
                    <IngredientControl recipeTotal={this.state.recipeTotal} class="ingredientOne" src={require('../images/strawberry.jpg')} id="Strawberry" onIncrement={this.incrementRecipeTotal} />
                    <IngredientControl recipeTotal={this.state.recipeTotal} class="ingredientTwo" src={require('../images/kiwi.jpg')} id="Kiwi" onIncrement={this.incrementRecipeTotal} />
                    <IngredientControl recipeTotal={this.state.recipeTotal} class="ingredientThree" src={require('../images/blueberry.jpg')} id="Blueberry" onIncrement={this.incrementRecipeTotal} />
                    <IngredientControl recipeTotal={this.state.recipeTotal} class="ingredientFour" src={require('../images/mango.jpg')} id="Mango" onIncrement={this.incrementRecipeTotal} />
                    <IngredientControl recipeTotal={this.state.recipeTotal} class="ingredientFive" src={require('../images/banna.jpg')} id="Banna" onIncrement={this.incrementRecipeTotal} />
                    <IngredientControl recipeTotal={this.state.recipeTotal} class="ingredientSix" src={require('../images/grapes.jpg')} id="Grapes" onIncrement={this.incrementRecipeTotal} />
                </div>
                <DrinkGauge recipeTotal={this.props.recipeTotal} />
                <Logo />
                <Announcements />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return ({ recipeTotal: state.drink.recipeTotal });
    
}

export default connect(mapStateToProps, {})(BuildDrinkScreen);