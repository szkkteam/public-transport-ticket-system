// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./Ticket.sol";
import "./Pass.sol";
import "./IConsumable.sol";

contract VendingMachine is Ownable {

    address public ticketAddress;
    address public passAddress;

    enum TicketType {
        SINGLE_TICKET,
        DAILY,
        WEEKLY,
        MONTHLY,
        YEARLY
    }

    uint256[][] private _priceMap;

    /**
     * Price for passes:
        1 day ($10)
        1 week ($50)
        1 month (150$)
        1 year (1500$)

        zones are inclusive, eg: 
        zone1 allow only for zone1
        zone2 allows, zone1 + zone2
        zone3 allows, zone1 + zone2 + zone3
        etc ...
        price modifier based on zone:
        zone1 (0.6)
        zone2 (0.72)
        zone3 (0.85)
        zone4 (1)
     */

     /**
                single ticket | daily | weekly | monthly | yearly | 
        zone1    
        zone2
        zone3
        zone4
      */

    constructor() {
        ticketAddress = address(0);
        passAddress = address(0);

        _createTicket();
        _createPass();
    }

    function _createTicket() internal {
        require(ticketAddress == address(0), "Ticket already created");
        Ticket ticket = new Ticket();

        ticketAddress = address(ticket);
    }

    function _createPass() internal {
        require(passAddress == address(0), "Pass already created");
        Pass pass = new Pass();

        passAddress = address(pass);
    }

    function updatePrices(uint256[][] memory priceMap) public onlyOwner {
        _priceMap = priceMap;

    }

    function getTicketBuyPrice() public returns (uint256) {

    }

    function buyTicket() external payable {
        // TODO: based on pricing table, estiamte the price
    }

    function buyPass() external payable {

    }

    function isTicketValid(uint256 id) external returns (bool) {

    }


}