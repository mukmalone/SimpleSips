import React from 'react';
import './style.css';

class IngredientControl extends React.Component {

    render() {
        return (
            <div className={this.props.class}>
                <div className="fruit-text">{this.props.id}</div>
                <div>
                    <div className="ingredient-control-text">{this.props.iAmount}</div>
                </div>
                <img className="fruit-pictures" alt={this.props.id} src={this.props.src}></img>
            </div>
        );
    }
}

export default IngredientControl;