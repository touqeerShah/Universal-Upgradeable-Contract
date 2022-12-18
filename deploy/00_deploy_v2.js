const { ethers } = require("hardhat")
// const fs = require("fs")
// const ADDRESS_PATH = "./addresses.json"
// const file = require(ADDRESS_PATH)
let { networkConfig, developmentChains } = require("../helper.config.js")
let { verify } = require("../utils/verify")
const fs = require("fs")
const fileName = "../addresses.json"
const file = require(fileName)
require("dotenv").config()

module.exports = async ({ getNamedAccounts, deployments, getChainId, network, upgrades }) => {
    const { log } = deployments
    const { upgradeProxy } = upgrades
    const { deployer } = await getNamedAccounts() // it will tell the who is going to deploy the contract
    const chainId = await getChainId()
    const Numberv1 = await ethers.getContractFactory("Numberv1") // Returns a new connection to the Raffle contract
    const Numberv2 = await ethers.getContractFactory("Numberv2") // Returns a new connection to the Raffle contract

    const initNumber = 785
    log("---------------- Numberv1 Proxy ----------------")

    log("Network is detected to be mock")

    const Proxy = await upgradeProxy(file.ProxyUUPS, Numberv2)
    await Proxy.deployed()
    file.UpdatedProxyUUPS = Proxy.address
    fs.writeFileSync(fileName, JSON.stringify(file, null, 4), "utf8")

    log(`PTNFT MarketPlace contract is deployed on local network to ${Proxy.address} ${chainId}`)

    if (!developmentChains.includes(network.name) && process.env.ETHERSCANAPIKEY) {
        await verify(Proxy.address, [])
    }
}
module.exports.tags = ["v2", "all"]
