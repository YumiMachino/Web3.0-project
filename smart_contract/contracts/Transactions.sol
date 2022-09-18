// "SPDX-License-Identifier: UNLICENSED" 

pragma solidity ^0.8.0;

contract Transactions {
    // variable 
    uint256 transactionCount;

    // function 
    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);


    // Object
    struct TransferStruct {
        // type / property
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    // array of Object(TransferStruct)
    TransferStruct[] transactions;

    // everybody can access this func
    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        transactionCount += 1;
        // add transaction to array
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        // transfer the amount
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }


    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }

}