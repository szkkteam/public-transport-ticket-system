// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

interface IConsumable {

    function isValid(uint256 id) external view virtual returns (bool);
}