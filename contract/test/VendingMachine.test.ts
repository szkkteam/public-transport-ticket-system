const truffleAssert = require('truffle-assertions');

//const { expect, assert } = require('chai');
const VendingMachine = artifacts.require("VendingMachine");
const {
    BN,           // Big Number support
    constants,    // Common constants, like the zero address and largest integers
  } = require('@openzeppelin/test-helpers');


contract("Token", ([deployer, user1, user2, user3, user4]) => {
    
});