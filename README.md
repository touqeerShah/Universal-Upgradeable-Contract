#  universal-upgradeable Contract 
Universal Upgradeable Proxy Contract (UUPC) in this exmaple we deployed and upgrade one contract with Universal Upgradeable methode, but if you didn't impletment it in start you can't used it later.

```
yarn add @openzeppelin/contracts-upgradeable
npm i @openzeppelin/contracts-upgradeable
npm i @openzeppelin/hardhat-upgrades --save
```

start node 
then deploye v1
copy address into address.json
test v1
then deploye v2
test v2
### Usercase
First we deploy one simple contract which do increament by one in his init values and then we deployed new contract which have new function increament by 2 every time that function call.

- [Hardhat Upgrades](#hardhat-upgrades)
- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Quickstart](#quickstart)
- [Usage](#usage)
  - [Testing](#testing)
    - [Test Coverage](#test-coverage)
- [Deployment to a testnet or mainnet](#deployment-to-a-testnet-or-mainnet)
  - [Scripts](#scripts)
  - [Verify on etherscan](#verify-on-etherscan)
- [Thank you!](#thank-you)

# Getting Started

## Requirements

- [Nodejs](https://nodejs.org/en/)
  - You'll know you've installed nodejs right if you can run:
    - `node --version` and get an ouput like: `vx.x.x`
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) instead of `npm`
  - You'll know you've installed yarn right if you can run:
    - `yarn --version` and get an output like: `x.x.x`
    -  You might need to install it with npm

## Quickstart

```
git clone https://github.com/touqeerShah/Universal-Upgradeable-Contract.git
cd Universal-Upgradeable-Contract
yarn
```


# Usage


Start Node locally :

```
yarn run node
```


Deploy Version V1:

```
yarn run deploy:v1
```
Copy Address to  V1:

```
addresses.json
{
    "ProxyUUPS": "<here Proxy Contract address>"
}

```

## Testing

```
yarn run test:v1
```



Deploy Version V2:

```
yarn run deploy:v2
```



```
yarn run test:v2
```




# Thank you!


[![Touqeer Medium](https://img.shields.io/badge/Medium-000000?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@touqeershah32)
[![Touqeer YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/channel/UC3oUDpfMOBefugPp4GADyUQ)
[![Touqeer Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/touqeer-shah/)

