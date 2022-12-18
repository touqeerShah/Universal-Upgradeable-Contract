const { expect, assert } = require("chai")
const { network, deployments, ethers, upgrades } = require("hardhat")
const fileName = "../../addresses.json"
const file = require(fileName)

const { developmentChains } = require("../../helper.config")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("NFTFarm ", function () {
          let deployer, redeemer, Numberv1, Proxy
          beforeEach(async function () {
              // deploy the contract on hard hardhat-deploy we will used
              // deployments -> it will run all the deployment script with tag
              ;[deployer, redeemer, _] = await ethers.getSigners()
              Proxy = await ethers.getContractAt("Numberv2", file.ProxyUUPS) // Returns a new connection to the Raffle contract
          })
          describe("Check Deployemtn", function () {
              it("check Number values", async function () {
                  let result = await Proxy.number()
                  console.log("result.toString(),", result.toString())
                  assert.equal(result.toString(), "785")
              })
              it("check call Incremenr", async function () {
                  await Proxy.increamentBytwo()
                  let result = await Proxy.number()

                  console.log("result.toString(),", result.toString())
                  assert.equal(result.toString(), "787")
              })
          })
      })
