import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

// object => metamask installed
const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({
        provider,
        signer,
        transactionContract
    });
}

export const TransactionProvider = ({ children }) =>  {

    const [currentAccount, setCurrentAccount] = useState(undefined);
    const [formData, setFormData] = useState({ addressTo: '', amount: '', keyword: '', message: '' });

    const handleChange = (e, name) => {
        setFormData((prevState) => ({...prevState, [name]: e.target.value}))

    }


    const checkIfWalletIsConnected = async () => {
        try {
            if(!ethereum) return alert('Please install metamask');
            // check ethereum account
            const accounts = await ethereum.request({ method: 'eth_accounts'});

            // if there is account connected
            if(accounts.length) {
                setCurrentAccount(accounts[0]);


                // getALlTransactions();

            } else {
                console.log('No accounts found');
            }
        } catch (error) {
            console.log(error);
            throw new Error('No ethereum object.')
        }

        console.log(accounts);
    }


    const connectWallet = async () => {
        try {
            // check they have metamask installed
            if(!ethereum) return alert('Please install metamask');

            // request all accounts
            const accounts = await ethereum.request({ method: 'eth_requestAccounts'});

            // choose the first account, and connect it
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.loog(error);

            throw new Error('No ethereum object.')
        }
    }

    const sendTransaction = async () => {
        try {
             // check they have metamask installed
            if(!ethereum) return alert('Please install metamask');

            // get the data from the form....


        } catch (error) {
            console.loog(error);

            throw new Error('No ethereum object.')
        }
    }

    useEffect(() => {
        // check if wallet is connect in the first load
        checkIfWalletIsConnected();
    }, [])


    return (
        <TransactionContext.Provider value={{ connectWallet, currentAccount }}>
            { children }
        </TransactionContext.Provider>
    );
}