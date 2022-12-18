const { ethers } = require("hardhat")
// const fs = require("fs")
// const ADDRESS_PATH = "./addresses.json"
// const file = require(ADDRESS_PATH)
let { networkConfig, developmentChains } = require("../helper.config.js")
let { verify } = require("../utils/verify")

require("dotenv").config()

module.exports = async ({ getNamedAccounts, deployments, getChainId, network, upgrades }) => {
    const { log } = deployments
    const { deployProxy } = upgrades
    const { deployer } = await getNamedAccounts() // it will tell the who is going to deploy the contract
    const chainId = await getChainId()
    const Numberv1 = await ethers.getContractFactory("Numberv1") // Returns a new connection to the Raffle contract
    const initNumber = 785
    log("---------------- Numberv1 Proxy ----------------")

    log("Network is detected to be mock")

    const Proxy = await deployProxy(Numberv1, [initNumber], {
        from: deployer,
        log: true,
        initializer: "initializ",
        waitConfirmations: network.config.blockConfirmations || 1,
    })
    await Proxy.deployed()
    // file.ProxyUUPS = Proxy.address
    // fs.writeFileSync(ADDRESS_PATH, JSON.stringify(file, null, 4), "utf8")

    log(`PTNFT MarketPlace contract is deployed on local network to ${Proxy.address} ${chainId}`)

    if (!developmentChains.includes(network.name) && process.env.ETHERSCANAPIKEY) {
        await verify(Proxy.address, [])
    }
}
module.exports.tags = ["v1", "all"]
