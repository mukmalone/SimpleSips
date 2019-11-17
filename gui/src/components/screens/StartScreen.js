import React from 'react'; 
import { connect } from 'react-redux';
import '../style.css';
import Announcements from '../Announcements';
import { resetIngredients, scanQRCode, scanedQRCode } from '../../actions';
import Logo from '../Logo';
import history from '../../history';

class StartScreen extends React.Component {

    componentDidMount() {
        this.props.resetIngredients();
    }

    nextScreen() {
        history.push('/builddrink');
    }

    chooseAccount1 = () => {
        this.props.scanedQRCode("0xBC0B51c0AFB3Ec48E36863B15ee6C75683788e00","Rosa")
    }

    chooseAccount2 = () => {
        this.props.scanedQRCode("0xa6ff2A92F593292Ce300e854c559922360FD2c1D","Simona")
    }

    chooseAccount3 = () => {
        this.props.scanedQRCode("0xBC0B51c0AFB3Ec48E36863B15ee6C75683788e00","Mike")
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
                    <div className="navigation-button" onClick={this.chooseAccount1} id="1">Rosa</div>
                    <div className="navigation-button" onClick={this.chooseAccount2} id="2">Simona</div>
                    <div className="navigation-button" onClick={this.chooseAccount3} id="3">Mike</div>
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
                    <h2>{this.props.userName}, let's build your drink!</h2>
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
            userID: state.user.userID,
            userName: state.user.userName
        }
    );
}

export default connect(mapStateToProps, { resetIngredients, scanQRCode, scanedQRCode })(StartScreen);