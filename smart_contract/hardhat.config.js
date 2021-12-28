
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/2d895U7U2cE5oq7QIfvhLUdXeamDvOOB',
      accounts: ['37f752f6a5bad27246da89e8ad72d3d3bef60a5db3c6a7b66e48a2a172826f6c'],
    },
  },
};