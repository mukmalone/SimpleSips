import React from 'react';
import Plot from 'react-plotly.js';
import { connect } from 'react-redux';

class Cup extends React.Component {


    render() {
        return (
            <div className="picture-box">
                <Plot
                    data={[{
                        type: 'funnelarea', values: [`${this.props.i1Tot}`, `${this.props.i2Tot}`,
                            `${this.props.i3Tot}`, `${this.props.i4Tot}`, `${this.props.i5Tot}`,
                            `${this.props.i6Tot}`],
                        text: [`${this.props.i1Name}`, `${this.props.i2Name}`, `${this.props.i3Name}`,
                            `${this.props.i4Name}`, `${this.props.i5Name}`, `${this.props.i6Name}`],
                        marker: {
                            colors: ["red", "brown", "blue", "greenyellow", "yellow", "purple"],
                            line: {
                                color: ["red", "brown", "blue", "greenyellow", "yellow", "purple"],
                                width: [1, 1, 1, 1, 1, 1]
                            }
                        },
                        textfont: { family: "Old Standard TT", size: 22, color: "black" }, opacity: .8
                    }]}
                    layout={{ margin: { l: 100, r: 100 }, funnelmode: "stack", showlegend: 'true' }}
                />
            </div>);
    }
}

const mapStateToProps = state => {
    return {
        i1Tot: state.drink.ingredientOne, i1Name: state.drink.ingredientOneName,
        i2Tot: state.drink.ingredientTwo, i2Name: state.drink.ingredientTwoName,
        i3Tot: state.drink.ingredientThree, i3Name: state.drink.ingredientThreeName,
        i4Tot: state.drink.ingredientFour, i4Name: state.drink.ingredientFourName,
        i5Tot: state.drink.ingredientFive, i5Name: state.drink.ingredientFiveName,
        i6Tot: state.drink.ingredientSix, i6Name: state.drink.ingredientSixName
    }
}

export default connect(mapStateToProps, {})(Cup);