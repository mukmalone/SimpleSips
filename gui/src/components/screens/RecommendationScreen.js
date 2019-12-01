import React from 'react';
import Web3 from 'web3';
import { connect } from 'react-redux';
import { getnumDrinksOrdered, setRecommendationStatus, getDrinkHistory, buildDrink } from '../../actions';
import { SimpleSips_Address, SimpleSips_Contract } from '../Contract/SimpleSips';
import IngredientDisplay from '../IngredientDisplay';
import '../style.css';
import history from '../../history';

class RecommendationScreen extends React.Component {

    state = {
        closestIndex: 0,
        furthestIndex: 0
    }

    componentDidMount() {
        this.getLastDrinks(this.props.userID, this.props);
    }

    componentDidUpdate() {
        this.getLastDrinks(this.props.userID, this.props);
        if (this.props.recommendationStatus === 3) {
            this.findDrinks();
        };
    }

    takeRecommendationLatest = () => {
        let drink = this.props.drinkHistory[this.props.numDrinksOrdered - 1];
        this.props.buildDrink('ingredientOne', 10 * drink.i1);
        this.props.buildDrink('ingredientTwo', 10 * drink.i2);
        this.props.buildDrink('ingredientThree', 10 * drink.i3);
        this.props.buildDrink('ingredientFour', 10 * drink.i4);
        this.props.buildDrink('ingredientFive', 10 * drink.i5);
        this.props.buildDrink('ingredientSix', 10 * drink.i6);
        history.push('/buildDrink');
    }

    takeRecommendationFurthest = () => {
        let drink = this.props.drinkHistory[this.state.furthestIndex];
        this.props.buildDrink('ingredientOne', 10 * drink.i1);
        this.props.buildDrink('ingredientTwo', 10 * drink.i2);
        this.props.buildDrink('ingredientThree', 10 * drink.i3);
        this.props.buildDrink('ingredientFour', 10 * drink.i4);
        this.props.buildDrink('ingredientFive', 10 * drink.i5);
        this.props.buildDrink('ingredientSix', 10 * drink.i6);
        history.push('/buildDrink');
    }

    takeRecommendationClosest = () => {
        let drink = this.props.drinkHistory[this.state.closestIndex];
        this.props.buildDrink('ingredientOne', 10 * drink.i1);
        this.props.buildDrink('ingredientTwo', 10 * drink.i2);
        this.props.buildDrink('ingredientThree', 10 * drink.i3);
        this.props.buildDrink('ingredientFour', 10 * drink.i4);
        this.props.buildDrink('ingredientFive', 10 * drink.i5);
        this.props.buildDrink('ingredientSix', 10 * drink.i6);
        history.push('/buildDrink');
    }

    getLastDrinks = async (userID, props) => {
        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
        const accounts = await web3.eth.getAccounts()
        const simpleSips = new web3.eth.Contract(SimpleSips_Contract, SimpleSips_Address)
   
        if (props.recommendationStatus === 0) {
            const result = await simpleSips.methods.getDrinkHistoryLength(userID).call({ from: accounts[0] }).then(
                function (result) {
                    props.getnumDrinksOrdered(result);
                    props.setRecommendationStatus(1);
                });
        } else if (props.recommendationStatus === 1) {
            const drinkHistoryOne = await simpleSips.methods.getDrinkHistoryOne(props.userID, props.numDrinksOrdered).call({ from: accounts[0] }).then(
                function (drinkHistoryOne) {
                    props.getDrinkHistory(2, props.numDrinksOrdered, drinkHistoryOne);
                    props.setRecommendationStatus(2);
                });
        } else if (props.recommendationStatus === 2) {
            const drinkHistoryTwo = await simpleSips.methods.getDrinkHistoryTwo(props.userID, props.numDrinksOrdered).call({ from: accounts[0] }).then(
                function (drinkHistoryTwo) {
                    props.getDrinkHistory(3, props.numDrinksOrdered, drinkHistoryTwo);
                    props.setRecommendationStatus(3);
                });
        } 
    };

    findDrinks = () => {
        let latestDrink = this.props.drinkHistory[this.props.numDrinksOrdered - 1];

        //find index of closest drink to the latest
        let distance = [];
        let start = 0;
        let end = this.props.numDrinksOrdered;
        if (end > 10) {
            end = 10;
        }

        //we want history to only be the last 10 drinks
        if (this.props.numDrinksOrdered > 10) {
            start = this.props.numDrinksOrdered - 11;
            end = this.props.numDrinksOrdered;
        }
        for (let i = start; i < end - 1; i++) {
            let next = this.props.drinkHistory[i];
            let result = parseFloat(
                Math.pow(
                    (Math.pow((latestDrink.i1 - next.i1), 2) + Math.pow((latestDrink.i2 - next.i2), 2) +
                        Math.pow((latestDrink.i3 - next.i3), 2) + Math.pow((latestDrink.i4 - next.i4), 2) +
                        Math.pow((latestDrink.i5 - next.i5), 2) + Math.pow((latestDrink.i6 - next.i6), 2)), .5));
            distance.push([result, i]);
        }
        
        let biggest = 0;
        let smallest = 0;
        for (let i = 0; i < distance.length; i++) {
            //closest 
            if (distance[smallest][0] > 0) {
                if (distance[smallest][0] > distance[i][0]) {
                    smallest = i;
                    this.setState({ closestIndex: distance[smallest][1] });
                } else if (distance[smallest][0] === 0) {
                    smallest = i;
                    this.setState({ closestIndex: distance[smallest][1] });
                }
            }
            //furthest
            if (distance[biggest][0] < distance[i][0]) {
                biggest = i;
                this.setState({ furthestIndex: distance[biggest][1] });
            }
        }
        this.props.setRecommendationStatus(4);
        
    };

    renderContent = () => {
        if (this.props.recommendationStatus < 3) {
            return (<div>Loading....</div>);
        } else {
            let latestDrink = this.props.drinkHistory[this.props.numDrinksOrdered - 1];
            let closestDrink = this.props.drinkHistory[this.state.closestIndex];
            let furthestDrink = this.props.drinkHistory[this.state.furthestIndex];

            return (
                <div>
                    <div>Your latest drink:</div>
                    <div className="grid-container">
                        <div className="navigation-button button-rec-grid" onClick={this.takeRecommendationLatest}>Select</div>
                        <IngredientDisplay class="ingredientOneRec" src={require('../images/strawberry.jpg')} id={`${this.props.i1Name}`} iAmount={10 * latestDrink.i1} />
                        <IngredientDisplay class="ingredientTwoRec" src={require('../images/kiwi.jpg')} id={`${this.props.i2Name}`} iAmount={10 * latestDrink.i2} />
                        <IngredientDisplay class="ingredientThreeRec" src={require('../images/blueberry.jpg')} id={`${this.props.i3Name}`} iAmount={10 * latestDrink.i3} />
                        <IngredientDisplay class="ingredientFourRec" src={require('../images/mango.jpg')} id={`${this.props.i4Name}`} iAmount={10 * latestDrink.i4} />
                        <IngredientDisplay class="ingredientFiveRec" src={require('../images/banna.jpg')} id={`${this.props.i5Name}`} iAmount={10 * latestDrink.i5} />
                        <IngredientDisplay class="ingredientSixRec" src={require('../images/blackberry.jpg')} id={`${this.props.i6Name}`} iAmount={10 * latestDrink.i6} />
                    </div>
                    <div>Something you might like:</div>
                    <div className="grid-container">
                        <div className="navigation-button button-rec-grid" onClick={this.takeRecommendationClosest}>Select</div>
                        <IngredientDisplay class="ingredientOneRec" src={require('../images/strawberry.jpg')} id={`${this.props.i1Name}`} iAmount={10 * closestDrink.i1} />
                        <IngredientDisplay class="ingredientTwoRec" src={require('../images/kiwi.jpg')} id={`${this.props.i2Name}`} iAmount={10 * closestDrink.i2} />
                        <IngredientDisplay class="ingredientThreeRec" src={require('../images/blueberry.jpg')} id={`${this.props.i3Name}`} iAmount={10 * closestDrink.i3} />
                        <IngredientDisplay class="ingredientFourRec" src={require('../images/mango.jpg')} id={`${this.props.i4Name}`} iAmount={10 * closestDrink.i4} />
                        <IngredientDisplay class="ingredientFiveRec" src={require('../images/banna.jpg')} id={`${this.props.i5Name}`} iAmount={10 * closestDrink.i5} />
                        <IngredientDisplay class="ingredientSixRec" src={require('../images/blackberry.jpg')} id={`${this.props.i6Name}`} iAmount={10 * closestDrink.i6} />
                    </div>
                    <div>Something different:</div>
                    <div className="grid-container">
                        <div className="navigation-button button-rec-grid" onClick={this.takeRecommendationFurthest}>Select</div>
                        <IngredientDisplay class="ingredientOneRec" src={require('../images/strawberry.jpg')} id={`${this.props.i1Name}`} iAmount={10 * furthestDrink.i1} />
                        <IngredientDisplay class="ingredientTwoRec" src={require('../images/kiwi.jpg')} id={`${this.props.i2Name}`} iAmount={10 * furthestDrink.i2} />
                        <IngredientDisplay class="ingredientThreeRec" src={require('../images/blueberry.jpg')} id={`${this.props.i3Name}`} iAmount={10 * furthestDrink.i3} />
                        <IngredientDisplay class="ingredientFourRec" src={require('../images/mango.jpg')} id={`${this.props.i4Name}`} iAmount={10 * furthestDrink.i4} />
                        <IngredientDisplay class="ingredientFiveRec" src={require('../images/banna.jpg')} id={`${this.props.i5Name}`} iAmount={10 * furthestDrink.i5} />
                        <IngredientDisplay class="ingredientSixRec" src={require('../images/blackberry.jpg')} id={`${this.props.i6Name}`} iAmount={10 * furthestDrink.i6} />
                    </div>
                </div>
            );
        }
    }



    render() {        
        return (
            <div className="body">
                {this.renderContent()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return (
        {
            enableCamera: state.user.enableCamera,
            userID: state.user.userID,
            userName: state.user.userName,
            recommendationStatus: state.user.recommendationStatus,
            numDrinksOrdered: state.user.numDrinksOrdered,
            drinkHistory: state.user.drinkHistory,
            i1Name: state.drink.ingredientOneName,
            i2Name: state.drink.ingredientTwoName,
            i3Name: state.drink.ingredientThreeName,
            i4Name: state.drink.ingredientFourName,
            i5Name: state.drink.ingredientFiveName,
            i6Name: state.drink.ingredientSixName
        }
    );
}

export default connect(mapStateToProps, { getnumDrinksOrdered, setRecommendationStatus, getDrinkHistory, buildDrink })(RecommendationScreen);