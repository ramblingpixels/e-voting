// const Migrations = artifacts.require("Migrations");
const vote = artifacts.require("vote");

module.exports = function (deployer) {
//   deployer.deploy(Migrations);
  deployer.deploy(vote);
};