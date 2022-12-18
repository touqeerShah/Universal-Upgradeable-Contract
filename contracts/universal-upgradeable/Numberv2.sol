// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.10;
// it will provide all the help for upgradabel contract
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
// it ill help us to rectrict only owner will allow to upgrade the contract
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
// we didn't initializ values in contractor other when we upgrade the contract we have to initilize values again
// because it global and static values are not become part of bytcode of proxy contract
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Numberv2 is Initializable, UUPSUpgradeable, OwnableUpgradeable {
    uint256 public number;

    function initializ(uint256 _number) public initializer {
        __Ownable_init();
        number = _number;
    }

    function _authorizeUpgrade(address) internal override onlyOwner {}

    function increamentByOne() public {
        number += 1;
    }

    function increamentBytwo() public {
        number += 2;
    }
}
