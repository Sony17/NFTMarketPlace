
const hre = require("hardhat");
const fs = require('fs')

async function main() {
  const NFTDisplayMarket = await hre.ethers.getContractFactory("NFTDisplayMarket");
  const nFTDisplayMarket = await NFTDisplayMarket.deploy();
  await nFTDisplayMarket.deployed();
  console.log("NFTDisplayMarket contract deployed to: ", nFTDisplayMarket.address);

  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(nFTDisplayMarket.address);
  await nft.deployed();
  console.log("NFT contract deployed to: ", nft.address);

  let config = `
  export const nftmarketaddress = ${nFTDisplayMarket.address}
  export const nftaddress = ${nft.address}`

  let data = JSON.stringify(config)
  fs.writeFileSync('config.js', JSON.parse(data))

}



main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
