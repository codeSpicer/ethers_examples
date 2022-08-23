const { ethers, Contract, utils } = require("ethers");
require("dotenv").config();

const provider = new ethers.providers.JsonRpcProvider(
  `${process.env.INFURA_MAINNET}${process.env.APIKEY}`
);

const ERC20_ABI = [
  "function name() view returns (string)",
  "function balanceOf(address owner) view returns (uint256)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns(uint256)",
];

const MATIC_ADDRESS = "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0";
const address = "0xcd6507d87f605f5e95c12f7c4b1fc3279dc944ab";

const contract = new ethers.Contract(MATIC_ADDRESS, ERC20_ABI, provider);

const main = async () => {
  const name = await contract.name();
  const symbol = await contract.symbol();
  const supply = await contract.totalSupply();
  const balance = await contract.balanceOf(address);

  console.log("Name of token: " + name);
  console.log("Symbol of token:", symbol);
  console.log("Total supply of token: ", utils.formatEther(supply));
  console.log(`Balance of ${address} is: `, utils.formatEther(balance));
};

main();
