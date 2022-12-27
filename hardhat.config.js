require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.7",
        settings: {
          optimizer: {
            enabled: true,
            runs: 2000,
            // details: { yul: false },
          },
        },
      },
      {
        version: "0.8.0",
      },
    ],
  },
  defaultNetwork: "testnet",
  etherscan: {
    apiKey: process.env.POLYGON_API_KEY,
    // apiKey: process.env.BSCSCAN_API_KEY
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      gas: 2100000,
      gasPrice: 20000000000,
      accounts: [process.env.PRIVATEKEY],
    },
    testnet: {
      url: "https://matic-mumbai.chainstacklabs.com",
      chainId: 80001,
      accounts: [`0x${process.env.PRIVATEKEY}`],
      gas: 2100000,
      gasPrice: 20000000000,
      // gasPrice: 8000000000,
      // saveDeployments: true,
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/b45ff4de8a1e4e7db9b781b4a8fcdc5a",
      chainId: 4,
      gas: 2100000,
      gasPrice: 20000000000,
      accounts: [process.env.PRIVATEKEY],
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/b45ff4de8a1e4e7db9b781b4a8fcdc5a",
      chainId: 1,
      gas: 2100000,
      gasPrice: 20000000000,
      accounts: [process.env.PRIVATEKEY],
    },
    bsctest: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gas: 2100000,
      gasPrice: 20000000000,
      accounts: [process.env.PRIVATEKEY],
    },
    celotest: {
      url: "https://alfajores-forno.celo-testnet.org",
      chainId: 44787,
      gas: 2100000,
      gasPrice: 20000000000,
      accounts: [process.env.PRIVATEKEY],
    },
    mumbai: {
      url: "https://matic-mumbai.chainstacklabs.com",
      chainId: 80001,
      gas: 2100000,
      gasPrice: 20000000000,
      accounts: [process.env.PRIVATEKEY],
    },
  },
};
