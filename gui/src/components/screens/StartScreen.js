import React from 'react'; 
import { connect } from 'react-redux';
import '../style.css';
import Announcements from '../Announcements';
import { resetIngredients, scanQRCode, scanedQRCode, get_numDrinkPasses } from '../../actions';
import Logo from '../Logo';
import history from '../../history';
import Web3 from 'web3';
import { SimpleSips_Address, SimpleSips_Contract } from '../Contract/SimpleSips';

class StartScreen extends React.Component {

    getNumDrinkPasses = async (userID, props) => {
        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
        const accounts = await web3.eth.getAccounts()
        const simpleSips = new web3.eth.Contract(SimpleSips_Contract, SimpleSips_Address)
        const result = await simpleSips.methods.numDrinkPasses(userID).call({ from: accounts[0] }).then(
            function (result) {
                props.get_numDrinkPasses(result*1);
            });
    };


    componentDidMount() {
        this.props.resetIngredients();
    }

    nextScreen() {
        history.push('/builddrink');
    }

    previousScreen= () => {
        this.props.resetIngredients();
    }

    chooseAccount1 = () => {
        this.props.scanedQRCode("0xBC0B51c0AFB3Ec48E36863B15ee6C75683788e00", "Rosa")
        this.getNumDrinkPasses("0xBC0B51c0AFB3Ec48E36863B15ee6C75683788e00", this.props);
    }

    chooseAccount2 = () => {
        this.props.scanedQRCode("0xa6ff2A92F593292Ce300e854c559922360FD2c1D", "Simona")
        this.getNumDrinkPasses("0xa6ff2A92F593292Ce300e854c559922360FD2c1D", this.props);
    }

    chooseAccount3 = () => {
        this.props.scanedQRCode("0xBC0B51c0AFB3Ec48E36863B15ee6C75683788e00", "Mike")
        this.getNumDrinkPasses("0xBC0B51c0AFB3Ec48E36863B15ee6C75683788e00", this.props);
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
        } else if (this.props.numDrinkPasses === 0) {
            return (
                <div>
                    <h2>{this.props.userName}, you only have {this.props.numDrinkPasses} left, please purchase more!</h2>
                    <div className="start-navigation">
                        <div className="navigation-button" onClick={this.previousScreen}>Previous</div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <h2>{this.props.userName}, you have {this.props.numDrinkPasses} left, let's build your drink!</h2>
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
            userName: state.user.userName,
            numDrinkPasses: state.user.numDrinkPasses
        }
    );
}

export default connect(mapStateToProps, { resetIngredients, scanQRCode, scanedQRCode, get_numDrinkPasses })(StartScreen);