const Zazzle = artifacts.require("FantasticDeeds");

module.exports = function (deployer) {
  deployer.deploy(Zazzle,1000000);
};
