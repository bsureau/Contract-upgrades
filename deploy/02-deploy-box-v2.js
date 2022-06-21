const { deployments, getNamedAccounts, network } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  log("------------------------------");
  const boxV2 = await deploy("BoxV2", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });
};
