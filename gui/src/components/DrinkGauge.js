import React from 'react'; 

class DrinkGauge extends React.Component {

    render() {
        return (
            <div>
                <h1>Recipe Total</h1>
                <h1>{this.props.recipeTotal}</h1>
            </div>
        );
    }
}

export default DrinkGauge;