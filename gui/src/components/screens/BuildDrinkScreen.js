import React from 'react';
import '../style.css';
import Announcements from '../Announcements';
import Logo from '../Logo';
import IngredientControl from '../IngredientControl';

class BuildDrinkScreen extends React.Component {
    render() {
        return (
            <div className="body">
                <h1>Welcome (name)!</h1>
                <h1>Choose your ingredients</h1>
                
                <div className="grid-container">
                    <IngredientControl class="grid-item1" src={require('../images/strawberry.jpg')} id="Strawberry" />
                    <IngredientControl class="grid-item2" src={require('../images/kiwi.jpg')} id="Kiwi" />
                    <IngredientControl class="grid-item3" src={require('../images/blueberry.jpg')} id="Blueberry" />
                    <IngredientControl class="grid-item4" src={require('../images/mango.jpg')} id="Mango" />
                    <IngredientControl class="grid-item5" src={require('../images/banna.jpg')} id="Banna" />
                    <IngredientControl class="grid-item6" src={require('../images/grapes.jpg')} id="Grapes" />
                </div>
                <Logo />
                <Announcements />
            </div>
        );
    }
}

export default BuildDrinkScreen;