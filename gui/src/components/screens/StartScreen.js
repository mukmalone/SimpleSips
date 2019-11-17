import React from 'react'; 
import { connect } from 'react-redux';
import '../style.css';
import Announcements from '../Announcements';
import { resetIngredients, scanQRCode } from '../../actions';
import Logo from '../Logo';
import history from '../../history';
import QRReader from '../QRReader';

class StartScreen extends React.Component {

    componentDidMount() {
        this.props.resetIngredients();
    }

    nextScreen() {
        history.push('/builddrink');
    }

    renderCamera = () => {
        if (this.props.enableCamera === 0) {
            return (
                <div className="picture-box">
                    <img className="pictures" alt="Drink 1" src={require('../images/drink-1.jpg')}></img>
                    <img className="pictures" alt="Drink 2" src={require('../images/drink-2.jpg')}></img>
                </div>
            )
        } else {
            return (
                <div className="picture-box">
                    <QRReader />
                </div>
                )
        }
    }

    renderButton = () => {
        if (!this.props.userID) {
            return (
                <div className="start-navigation">
                    <div className="navigation-button" onClick={this.props.scanQRCode}>Scan Cup</div>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>{this.props.userID}, let's build your drink!</h2>
                    <div className="start-navigation">
                        <div className="navigation-button" onClick={this.nextScreen}>Next</div>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="body">
                <h1>Place your cup on the right to get started!</h1>
                {this.renderCamera()}
                {this.renderButton()}
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

const mapStateToProps = state => {
    return (
        {
            enableCamera: state.user.enableCamera,
            userID: state.user.userID
        }
    );
}

export default connect(mapStateToProps, { resetIngredients, scanQRCode })(StartScreen);