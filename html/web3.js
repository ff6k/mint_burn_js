'use strict';

const ContractAddress = "0x8Cc7698a8E229447aCB6138a5e1BE73dD79bbd52";

const PancakeFactoryAddress = '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73';
const PancakeRouterAddress = '0x10ED43C718714eb63d5aA57B78B54704E256024E';
const LockLiquidityContractAddress = '0x23f9787351F69f7215828D308486fA9B813f92Cd';

const ABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [{ "name": "", "type": "string" }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            { "name": "spender", "type": "address" },
            { "name": "value", "type": "uint256" }
        ],
        "name": "approve",
        "outputs": [{ "name": "", "type": "bool" }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{ "name": "", "type": "uint256" }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            { "name": "sender", "type": "address" },
            { "name": "recipient", "type": "address" },
            { "name": "amount", "type": "uint256" }
        ],
        "name": "transferFrom",
        "outputs": [{ "name": "", "type": "bool" }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [{ "name": "", "type": "uint256" }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            { "name": "spender", "type": "address" },
            { "name": "addedValue", "type": "uint256" }
        ],
        "name": "increaseAllowance",
        "outputs": [{ "name": "", "type": "bool" }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            { "name": "account", "type": "address" },
            { "name": "amount", "type": "uint256" }
        ],
        "name": "mint",
        "outputs": [{ "name": "", "type": "bool" }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{ "name": "value", "type": "uint256" }],
        "name": "burn",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{ "name": "decimal", "type": "uint256" }],
        "name": "spinSlotMachine",
        "outputs": [
            { "name": "rand0", "type": "uint256" },
            { "name": "rand1", "type": "uint256" },
            { "name": "rand2", "type": "uint256" }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{ "name": "account", "type": "address" }],
        "name": "balanceOf",
        "outputs": [{ "name": "", "type": "uint256" }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [{ "name": "", "type": "string" }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{ "name": "account", "type": "address" }],
        "name": "addMinter",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "renounceMinter",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            { "name": "spender", "type": "address" },
            { "name": "subtractedValue", "type": "uint256" }
        ],
        "name": "decreaseAllowance",
        "outputs": [{ "name": "", "type": "bool" }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            { "name": "recipient", "type": "address" },
            { "name": "amount", "type": "uint256" }
        ],
        "name": "transfer",
        "outputs": [{ "name": "", "type": "bool" }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{ "name": "account", "type": "address" }],
        "name": "isMinter",
        "outputs": [{ "name": "", "type": "bool" }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{ "name": "newMinter", "type": "address" }],
        "name": "transferMinterRole",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{ "name": "decimal", "type": "uint256" }],
        "name": "getRandom",
        "outputs": [{ "name": "", "type": "uint256" }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            { "name": "owner", "type": "address" },
            { "name": "spender", "type": "address" }
        ],
        "name": "allowance",
        "outputs": [{ "name": "", "type": "uint256" }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            { "name": "name", "type": "string" },
            { "name": "symbol", "type": "string" },
            { "name": "decimals", "type": "uint256" },
            { "name": "initialSupply", "type": "uint256" },
            { "name": "feeReceiver", "type": "address" },
            { "name": "tokenOwnerAddress", "type": "address" }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [{ "indexed": true, "name": "account", "type": "address" }],
        "name": "MinterAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{ "indexed": true, "name": "account", "type": "address" }],
        "name": "MinterRemoved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            { "indexed": true, "name": "from", "type": "address" },
            { "indexed": true, "name": "to", "type": "address" },
            { "indexed": false, "name": "value", "type": "uint256" }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            { "indexed": true, "name": "owner", "type": "address" },
            { "indexed": true, "name": "spender", "type": "address" },
            { "indexed": false, "name": "value", "type": "uint256" }
        ],
        "name": "Approval",
        "type": "event"
    }
]

let account;
let Web3Instance;

window.addEventListener('load', async () => {
    await connectMetamask()

    document.getElementById("connectMetamaskButton").addEventListener("click", connectMetamask);
    const mintButton = document.getElementById("mintButton");
    const burnButton = document.getElementById("burnButton");

    mintButton.addEventListener("click", mintButtonClick);
    burnButton.addEventListener("click", burnButtonClick);

    if (window.web3.enable) {
        window.web3.eth.getAccount().then(async (r) => {
            account = r;
        });
    }
});

function validateDecimals(e, y) {
    console.log(y)
    document.getElementById(y).style.display = "none";

    var regex = new RegExp(/^(\d+\.?\d{0,20}|\.\d{1,20})$/);
    if (!regex.test(e.value)) {
        document.getElementById(y).style.display = "block";
        switch (y) {
            case 'invBnb':
                form1BnbAm = false;
                break;

            case 'invTkA':
                form1TkAm = false;
                break;

            case 'invTkA':
                form2TkBal = false;
                break;
        }
    } else {
        switch (y) {
            case 'invBnb':
                form1BnbAm = true;
                break;

            case 'invTkA':
                form1TkAm = true;
                break;

            case 'invTkA':
                form2TkBal = true;
                break;
        }
    }
}

async function burnButtonClick() {
    const contract = new window.web3.eth.Contract(ABI, ContractAddress);
    const amount = document.getElementById("burnAmount").value;
    
    contract.methods.burn(amount)
        .send({
            from: account,
            gasLimit: 100000,
            type: '0x2'
        })
}

async function mintButtonClick() {
    const contract = new window.web3.eth.Contract(ABI, ContractAddress);
    const address = document.getElementById("mintTokenAddressInput").value;
    const amount = document.getElementById("mintTokenAmount").value;
    
    contract.methods.mint(address, amount)
        .send({
            from: account,
            gasLimit: 100000,
            type: '0x2'
        })
}

async function initialWallet() {

    if (account == null) {
        account = await new Promise((resolve, reject) => {

            window.web3.eth.getAccounts(async (err, retAccount) => {
                if (retAccount.length > 0) {
                    $('a#connectMetamaskButton').text(retAccount[0]);
                    resolve(retAccount[0]);
                } else {
                    // alert('transfer.service :: getAccount :: no accounts found.');
                    reject('No accounts found.');
                }
                if (err != null) {
                    // alert('transfer.service :: getAccount :: error retrieving account');
                    reject('Error retrieving account');
                }
            });
        });
    }
    return Promise.resolve(account);
}

async function connectMetamask() {
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        Web3Instance = window.web3;
        try {
            // Request account access if needed
            await ethereum.enable();
            // Acccounts now exposed
            await initialWallet();

        } catch (error) {
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
}
