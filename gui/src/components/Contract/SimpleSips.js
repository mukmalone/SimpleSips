export const SimpleSips_Address = '0x863Ae41E1cc662eb39df2f5Ae5C1c7D9F6b6CB79';
//export const SimpleSips_Address = '0x2C5c588F18a9419b4adC93565DBcd2c9c193aE72';

export const SimpleSips_Contract = [
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_numDrinkPasses",
                "type": "uint256"
            }
        ],
        "name": "addDrinkPasses",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_numDrinkPasses",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_date",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_iOne",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_iTwo",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_iThree",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_iFour",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_iFive",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_iSix",
                "type": "uint256"
            }
        ],
        "name": "buyDrink",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "killWallet",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "addDrinkMapping",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "date",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "iOne",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "iTwo",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "iThree",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "iFour",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "iFive",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "iSix",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "addUserDrinkMapping",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "numDrinkPasses",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "getDrinkHistoryLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_numDrinks",
                "type": "uint256"
            }
        ],
        "name": "getDrinkHistoryOne",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_numDrinks",
                "type": "uint256"
            }
        ],
        "name": "getDrinkHistoryTwo",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "numDrinkPasses",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];