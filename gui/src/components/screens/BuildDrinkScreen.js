import React from 'react';
import '../style.css';
import Announcements from '../Announcements';
import Logo from '../Logo';

class BuildDrinkScreen extends React.Component {
    render() {
        return (
            <div className="body">
                <h1>Welcome (name)!</h1>
                <h1>Choose your ingredients</h1>
                <div className="grid-container">
                    <div class="grid-item1">
                        <img className="fruit-pictures" src={require('../images/strawberry.jpg')}></img>
                        <div className="fruit-text">Strawberry</div>
                    </div>
                    <div class="grid-item2">
                        <img className="fruit-pictures" src={require('../images/kiwi.jpg')}></img>
                        <div className="fruit-text">Kiwi</div>
                    </div>
                    <div class="grid-item3">
                        <img className="fruit-pictures" src={require('../images/blueberry.jpg')}></img>
                        <div className="fruit-text">Blueberry</div>
                    </div>
                    <div class="grid-item4">
                        <img className="fruit-pictures" src={require('../images/mango.jpg')}></img>
                        <div className="fruit-text">Mango</div>
                    </div>
                    <div class="grid-item5">
                        <img className="fruit-pictures" src={require('../images/banna.jpg')}></img>
                        <div className="fruit-text">Banna</div>
                    </div>
                    <div class="grid-item6">
                        <img className="fruit-pictures" src={require('../images/grapes.jpg')}></img>
                        <div className="fruit-text">Grapes</div>
                    </div>
                </div>
                <Logo />
                <Announcements />
            </div>
        );
    }
}

export default BuildDrinkScreen;