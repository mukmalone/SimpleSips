import React from 'react';
import './style.css';

class IngredientControl extends React.Component {

    render() {
        return (
            <div className={this.props.class}>
                <div className="fruit-text">{this.props.id}</div>
                <img className="fruit-pictures" alt={this.props.id} src={this.props.src}></img>
                <p>
                    <div className="ingredient-control">+</div>
                    <div className="ingredient-control-text">0</div>
                    <div className="ingredient-control">-</div>
                </p>
            </div>
        );
    }
}

export default IngredientControl;