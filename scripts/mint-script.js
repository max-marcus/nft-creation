const hre = require('hardhat');

async function main() {
  const NFT = await hre.ethers.getContractFactory('MyNFT');
  const URI = "ipfs://QmTSaVrMDhk2RQPJin2avrUGXAXejhrHvcw1bY2Sec7fGR";
  const WALLET_ADDRESS = "0xf5dBf18392C7eEb4BEdB95309811Fa8d246F55D5";
  const CONTRACT_ADDRESS = "0xf7f97F8Db573A617B49755575bCC0a1f4cfdc627";

  const contract = NFT.attach(CONTRACT_ADDRESS);

  await contract.mint(WALLET_ADDRESS, URI);
  console.log('NFT minted: ', contract);
}

main().then(() => process.exit(0)).catch((err) => {
  console.error(err);
  process.exit(1);
});
