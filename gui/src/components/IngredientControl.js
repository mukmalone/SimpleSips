import React from 'react';
import { connect } from 'react-redux';
import './style.css';
import { buildDrink } from '../actions';

class IngredientControl extends React.Component {
    incrementIngredient = () => {
        if (this.props.ingredientTotal < 100 && this.props.recipeTotal < 100) {
            //increment by 10
            let result = this.props.ingredientTotal + 10;
            this.props.buildDrink(this.props.class, result);
        }
    }

    decrementIngredient = () => {
        if (this.props.ingredientTotal > 0) {
            //decrement by 10
            let result = this.props.ingredientTotal - 10;
            this.props.buildDrink(this.props.class, result);
        }
    }

    render() {
        return (
            <div className={this.props.class}>
                <div className="fruit-text">{this.props.id}</div>
                <img className="fruit-pictures" alt={this.props.id} src={this.props.src}></img>
                <div>
                    <div className="ingredient-control" onClick={this.decrementIngredient}>-</div>
                    <div className="ingredient-control-text">{this.props.ingredientTotal}</div>
                    <div className="ingredient-control" onClick={this.incrementIngredient}>+</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    let result = { recipeTotal: state.drink.recipeTotal };
    switch (props.class) {
        case 'ingredientOne':
            return ({ ...result, ingredientTotal: state.drink.ingredientOne });
        case 'ingredientTwo':
            return ({ ...result, ingredientTotal: state.drink.ingredientTwo });
        case 'ingredientThree':
            return ({ ...result, ingredientTotal: state.drink.ingredientThree });
        case 'ingredientFour':
            return ({ ...result, ingredientTotal: state.drink.ingredientFour });
        case 'ingredientFive':
            return ({ ...result, ingredientTotal: state.drink.ingredientFive });
        case 'ingredientSix':
            return ({ ...result, ingredientTotal: state.drink.ingredientSix });
        default:
            return (result);
    };
}

export default connect(mapStateToProps, { buildDrink })(IngredientControl);