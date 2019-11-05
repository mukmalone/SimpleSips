import React from 'react'; 
import { connect } from 'react-redux';
import '../style.css';
import Announcements from '../Announcements';
import { resetIngredients } from '../../actions';
import Logo from '../Logo';
import history from '../../history';

class StartScreen extends React.Component {
    componentDidMount() {
        this.props.resetIngredients();
    }

    nextScreen() {
        history.push('/builddrink');
    }
    render() {
        return (
            <div className="body">
                <h1>Place your cup on the right to get started!</h1>
                <div className="picture-box">
                    <img className="pictures" alt="Drink 1" src={require('../images/drink-1.jpg')}></img>
                    <img className="pictures" alt="Drink 2" src={require('../images/drink-2.jpg')}></img>
                </div>
                <div className="start-navigation">
                    <div className="navigation-button" onClick={this.nextScreen}>Next</div>
                </div>
                <div className="grid-logo">
                    <Logo />
                </div>
                <div className="grid-announcements">
                    <Announcements />
                </div>
            </div>
        );
    }

}

export default connect(null, { resetIngredients })(StartScreen);