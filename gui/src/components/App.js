import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import StartScreen from './screens/StartScreen'
import BuildDrinkScreen from './screens/BuildDrinkScreen';
import OrderSummaryScreen from './screens/OrderSummaryScreen';
import FinalizeOrderScreen from './screens/FinalizeOrderScreen';
import OrderCompleteScreen from './screens/OrderCompleteScreen';
import QRReader from './QRReader';
import MetaMask from './MetaMask'
import RecommendationScreen from './screens/RecommendationScreen';

class App extends React.Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route path="/" exact component={StartScreen} />
                        <Route path="/buildDrink" exact component={BuildDrinkScreen} />
                        <Route path="/orderSummary" exact component={OrderSummaryScreen} />
                        <Route path="/finalizeOrder" exact component={FinalizeOrderScreen} />
                        <Route path="/orderComplete" exact component={OrderCompleteScreen} />
                        <Route path="/metaMask" exact component={MetaMask} />
                        <Route path="/qrreader" exact component={QRReader} />
                        <Route path="/recommendation" exact component={RecommendationScreen} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;