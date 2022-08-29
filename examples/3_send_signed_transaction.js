const { ethers, Contract, utils, Wallet } = require("ethers");
require("dotenv").config();

// parseEther changes string to wei
// formatEther changes big data to ether

const provider = new ethers.providers.JsonRpcProvider(
  process.env.INFURA_RINKEBY + process.env.APIKEY
);

const account1 = process.env.PUBLIC_KEY_1;
const account2 = process.env.PUBLIC_KEY_2;
const privateKey1 = process.env.PRIVATE_KEY_1;
const privateKey2 = process.env.PRIVATE_KEY_2;

const wallet = new ethers.Wallet(privateKey1, provider);
const wallet2 = new ethers.Wallet(privateKey2, provider);

const main = async () => {
  console.log(
    "Sender's balance before: ",
    utils.formatEther(await provider.getBalance(account1))
  );
  console.log(
    "Reciever's balance before: ",
    utils.formatEther(await provider.getBalance(account2))
  );

  const tx = await wallet.sendTransaction({
    to: account2,
    value: ethers.utils.parseEther("0.001"),
  });

  await tx.wait();
  // console.log(tx);
  console.log(
    tx.from,
    " sent ",
    ethers.utils.formatEther(tx.value),
    " to ",
    tx.to,
    "with hash ",
    tx.hash
  );

  console.log(
    "Sender's balance after: ",
    utils.formatEther(await provider.getBalance(account1))
  );
  console.log(
    "Reciever's balance after: ",
    utils.formatEther(await provider.getBalance(account2))
  );

  // const tx_return = await wallet2.sendTransaction({
  //   to: account1,
  //   value: ethers.utils.parseEther(
  //     utils.formatEther(await provider.getBalance(account2))
  //   ),
  // });      // will fail because if transfer all balance then gas fee cannot be sent
};

main();
