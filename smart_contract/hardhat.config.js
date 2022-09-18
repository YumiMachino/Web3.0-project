// alchemy HTTPs key: 
//



require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: { 
    goerli : {
      url: 'https://eth-goerli.g.alchemy.com/v2/OSUoSNTkRdQLsxTSJVXuTbOST2XdOZ1J', 
      accounts: ['7880240710dd713159a221c2b22ac7322dfa61a52bf6e2becc1faac99171a58b']
    }
  }
}

