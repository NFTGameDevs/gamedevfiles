const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
        host: "127.0.0.1",     // Localhost (default: none)
        port: 7545,            // Standard Ethereum port (default: none)
        network_id: "*",       // Any network (default: none)
      },

    rinkeby: {
    provider: () => new HDWalletProvider(mnemonic, 'METAMASK Rinkeby RPC URL HERE'),
      confirmations: 2,
      network_id: 4,
      skipDryRun: true,
    },






  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0", // A version or constraint - Ex. "^0.5.0"
      optimizer: { enabled: true, runs: 200 }
    }
  },

}
