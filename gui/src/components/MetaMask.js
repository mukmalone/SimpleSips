import React from 'react';
import Web3 from 'web3';
import { SimpleSips_Address, SimpleSips_Contract } from './Contract/SimpleSips';

class MetaMask extends React.Component {
    state = { account: "null" };
    validateMetaMask = async () => {
        if (typeof window.ethereum !== 'undefined' || (typeof window.web3 !== 'undefined')) {
            if (!window.ethereum.selectedAddress) {
                const accounts = await window.ethereum.enable();
                this.setState({ account: `${accounts[0]}` });
            } else {
                this.setState({ account: `${window.ethereum.selectedAddress}` });
            }
        } else {
            alert('Hello!  Please install MetaMask from the chrome web store to access this site.  It will give you access to the Ethereum blockchain.');
        }
    }

    connectBlockchain = async () => {
        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
        const accounts = await web3.eth.getAccounts()
        this.setState({ account: accounts[0] })
        const simpleSips = new web3.eth.Contract(SimpleSips_Contract, SimpleSips_Address)
        this.setState({ simpleSips })
        const numPasses = await simpleSips.methods.numDrinkPasses('0xBC0B51c0AFB3Ec48E36863B15ee6C75683788e00').call()
        console.log(numPasses);
    }

    buyDrink = async () => {
        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
        const accounts = await web3.eth.getAccounts()
        this.setState({ account: accounts[0] })
        const simpleSips = new web3.eth.Contract(SimpleSips_Contract, SimpleSips_Address)
        this.setState({ simpleSips })
        const buyDrink = await simpleSips.methods.buyDrink('0xBC0B51c0AFB3Ec48E36863B15ee6C75683788e00', 1, 2, 3, 4, 5, 6, 7, 8).send({ from: this.state.account });
        console.log(buyDrink);
    }


    componentDidMount() {
        //this.validateMetaMask();
        //this.sendTransaction();
        this.connectBlockchain();
        this.buyDrink();
    }

    render() {

        return (
            <div>
                <div>{this.state.account}</div>
            </div>
        );
    }
}

export default MetaMask;