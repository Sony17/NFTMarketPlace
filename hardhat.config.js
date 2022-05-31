require("@nomiclabs/hardhat-waffle");
const projectId = 'c8fec96713c54f698db3709db29eb64a';
const fs = require('fs')
const keyData = fs.readFileSync('./p-key.txt', {
  encoding:'utf8', flag:'r'
})

module.exports = {
  defaultNetwork: 'hardhat',
  networks:{
    hardhat:{
      chainId: 1337
    },
    mumbai:{
      url:`https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts:[keyData]
    },
    mainnet: {
      url:`https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts:[keyData]
    }
  },
  solidity: {
  version: "0.8.4",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}
};
