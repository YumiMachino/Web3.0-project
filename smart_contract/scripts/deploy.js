//  deployed* 0x2c12251F58659aEB8c4c2AbA1e3Fc75fF27170CB

const main = async () => {
  const Transactions = await hre.ethers.getContractFactory('Transactions');
  const transactions = await Transactions.deploy();

  await transactions.deployed();
  
  
  console.log('Transactions deployed to: ', transactions.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}


runMain();