import React from 'react'; 
import Plot from 'react-plotly.js';

class DrinkGauge extends React.Component {

    render() {
        return (
            <div>
                <Plot
                    data={[
                        {
                            domain: { x: [0, 1], y: [0, 1] },
                            value: `${this.props.recipeTotal}`,
                            type: "indicator",
                            mode: "gauge+number",
                            delta: { reference: 60 },
                            gauge: { axis: { range: [null, 100] } }
                        }
                    ]}
                    layout={{ margin: { l: 0, r:0, t:0, b:0 }, width: 170, height: 170 }}
            />
            </div>
        );
    }
}

export default DrinkGauge;