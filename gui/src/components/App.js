import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import StartScreen from './screens/StartScreen'
import BuildDrinkScreen from './screens/BuildDrinkScreen';
import MetaMask from './MetaMask'

class App extends React.Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route path="/" exact component={StartScreen} />
                        <Route path="/buildDrink" exact component={BuildDrinkScreen} />
                        <Route path="/metaMask" exact component={MetaMask} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;