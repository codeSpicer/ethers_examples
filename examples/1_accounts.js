const { ethers, utils } = require("ethers");
// require("dotenv").config();
require("dotenv").config({ debug: true });

const provider = new ethers.providers.JsonRpcProvider(
  `${process.env.INFURA_RINKEBY}${process.env.APIKEY}`
);

const getInfo = async () => {
  console.log("current block number is:" + (await provider.getBlockNumber()));

  console.log(
    "balance of your account is:" +
      ethers.utils.formatEther(
        await provider.getBalance(process.env.PUBLIC_KEY)
      )
  );
};

getInfo();
