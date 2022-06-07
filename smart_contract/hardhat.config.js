require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/GNphab34Qo5gqhS0u9B8DTxVACulkmUs',
      accounts: ['account address'],
    },
  },
};