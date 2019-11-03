import React from 'react';
import { connect } from 'react-redux';

class CalorieCalculator extends React.Component {
    state = {
        totalCalories: 0,
        c1: 2,
        c2: 3,
        c3: 1.5,
        c4: 2,
        c5: 6,
        c6: 1
    };
    componentDidMount() {
        let result = this.props.i1Tot * this.state.c1
            + this.props.i2Tot * this.state.c2 
            + this.props.i3Tot * this.state.c3
            + this.props.i4Tot * this.state.c4
            + this.props.i5Tot * this.state.c5
            + this.props.i6Tot * this.state.c6;
        this.setState({ totalCalories: result });
    }
    render() {
        return (
            <div>
                Drink Nutrition
                <div>{this.props.i1Name}: {this.props.i1Tot * this.state.c1} calories</div>
                <div>{this.props.i2Name}: {this.props.i2Tot * this.state.c2} calories</div>
                <div>{this.props.i3Name}: {this.props.i3Tot * this.state.c3} calories</div>
                <div>{this.props.i4Name}: {this.props.i4Tot * this.state.c4} calories</div>
                <div>{this.props.i5Name}: {this.props.i5Tot * this.state.c5} calories</div>
                <div>{this.props.i6Name}: {this.props.i6Tot * this.state.c6} calories</div>
                <div>Total calories: {this.state.totalCalories}</div>
            </div>
        );

    }
}

const mapStateToProps = state => {
    return {
        i1Tot: state.drink.ingredientOne,
        i1Name: state.drink.ingredientOneName,
        i2Tot: state.drink.ingredientTwo,
        i2Name: state.drink.ingredientTwoName,
        i3Tot: state.drink.ingredientThree,
        i3Name: state.drink.ingredientThreeName,
        i4Tot: state.drink.ingredientFour,
        i4Name: state.drink.ingredientFourName,
        i5Tot: state.drink.ingredientFive,
        i5Name: state.drink.ingredientFiveName,
        i6Tot: state.drink.ingredientSix,
        i6Name: state.drink.ingredientSixName
    }
}

export default connect(mapStateToProps, {})(CalorieCalculator);