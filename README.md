# Hardhat upgrades

Exploring upgradable smart contract patterns.

## Patterns

### Parameter:

This mean updating a smart contract using a setter function. Ex: having a setter function to update a reward parameter inside the smart contract.

- Advantages: this is a simple solution to implement
- Disadvantages: you have to think of all the logic in your smart contract before it’s deployed Plus: who are the admins and have the right to call these functions?

### Social migration method:

This mean deploying a new smart contract an tell people to migrate from the old one to the new one

- Advantages: You don’t break the immutability promise of smart contracts. It's easier to audit.
- Disadvantages: it's a lot of effort to convince people to move

### Proxies:

Users always interact with the same proxy. You can change the smart contract address you want your proxy to interact to using `fallback` function and `delegate calls` (which give you the power to execute target contract in the context of the calling contract!).

- Advantages: truest form of programatic upgrades. Storage variables are stored in the proxy contract and not in the implementation contract (this way, when you upgrade to a new logic contract, all the data will stay on the proxy)
- Disadvantages: subject to storage / function selector clashing

There are many proxy patterns :

- Transparent proxy pattern: admin are only allowed to call admin functions that govern the upgrades. Users can only call non admin functions (aka implementation functions)
- Universal upgradable proxies: admin functions are in the implementation contract. Gas saving, but you’re stuck once contract is deployed if you need to upgrade later.
- Diamon pattern: allow for multiple implementation contracts. Allows you to better organize your code and have more granular upgrades

## Run the project

This project is an implementation of `Transparent proxy pattern`.

```sh
yarn # Install dependencies
yarn hardhat compile # compile contracts source code
yarn hardhat node # launch local blockchain
yarn hardhat deploy --network localhost # deploy contracts on your local blockchain
yarn hardhat run ./scripts/upgradeBox.js # upgrade Box v1 solidity smart contract to Box v2!
```
