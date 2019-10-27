import React from 'react';

class MetaMask extends React.Component {
    state = { account: "" };
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

    createGridPattern() {
        if (this.state.account.length > 0) {
            let account = this.state.account;
            let result = account.slice(0, 3)
            return (parseInt(result));
        } 
    }

    componentDidMount() {
        this.validateMetaMask();
    }

    render() {

        return (
            <div>
                <div>{this.state.account}</div>
                <div>{this.state.account.length}</div>
                <div>{this.createGridPattern()}</div> 
            </div>
        );
    }
}

export default MetaMask;