import React from 'react'; 
import '../style.css';
import Announcements from '../Announcements';
import Logo from '../Logo';

class StartScreen extends React.Component {
    render() {
        return (
            <div className="body">
                <h1>Place your cup on the right to get started!</h1>
                <div className="picture-box">
                    <img className="pictures" src={require('../images/drink-1.jpg')}></img>
                    <img className="pictures" src={require('../images/drink-2.jpg')}></img>
                </div>
                <Logo />
                <Announcements />
            </div>
        );
    }

}

export default StartScreen;