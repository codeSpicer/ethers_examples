const { ethers, Contract, utils } = require("ethers");
require("dotenv").config();

const provider = new ethers.providers.JsonRpcProvider(
  `${process.env.INFURA_RINKEBY}${process.env.APIKEY}`
);

const main = async () => {};

main();
