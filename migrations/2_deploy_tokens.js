const EIP20 = artifacts.require('./EIP20.sol');

module.exports = (deployer) => {
  deployer.deploy(EIP20, 2000, 'KAMESCG', 0, 'KCG');
};
