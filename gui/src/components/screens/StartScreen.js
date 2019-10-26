import React from 'react'; 
import '../style.css';

class StartScreen extends React.Component {
    render() {
        return (
            <div className="body">
                <h1>Place your cup on the right to get started!</h1>
                <div className="picture-box">
                    <img className="pictures" src={require('../images/drink-1.jpg')}></img>
                    <img className="pictures" src={require('../images/drink-2.jpg')}></img>
                </div>

                <div className="logo-box">
                    <img className="logo" src={require('../images/logo.jpg')}></img>
                </div>
                <div className="announcements">Announcements</div>
            </div>

        );
    }

}

export default StartScreen;