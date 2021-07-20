const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFT", function () {
  it("It should deploy the contract, mint a token, and resolve to the right URI", async function () {
    const NFT = await ethers.getContractFactory("MyNFT");
    const nft = await NFT.deploy();
    const URI = "ipfs://QmWJBNeQAm9Rh4YaW8GFRnSgwa4dN889VKm9poc2DQPBkv";
    await nft.deployed();
    await nft.mint("0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199", URI);

    expect(await nft.tokenURI(1)).to.equal(URI);
  });
});
