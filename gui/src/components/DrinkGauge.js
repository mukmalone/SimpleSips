import React from 'react'; 

class DrinkGauge extends React.Component {

    render() {
        return (
            <div>
                <h1>{this.props.recipeTotal}</h1>
                <h2>100 completes drink</h2>
            </div>
        );
    }
}

export default DrinkGauge;