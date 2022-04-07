// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "./Ticket.sol";

contract VendingMachine is Ownable, Pausable {

    address public ticketAddress;

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

    constructor(address _ticketAddress) {
        require(_ticketAddress != address(0), "Invalid ticket addresses");

        ticketAddress = _ticketAddress;

        // Pause untill the prices are set
        _pause();

    }

    function _getValidTo(uint64 validFrom, uint8 ticketType) private pure returns (uint64) {
        if (ticketType == (uint8(TicketType.DAILY))) {
            return validFrom + 1 days;
        } else if (ticketType == (uint8(TicketType.WEEKLY))) { 
            return validFrom + 1 weeks;
        } else if (ticketType == (uint8(TicketType.MONTHLY))) { 
            return validFrom + 30 days; // TODO: fix this
        } else if (ticketType == (uint8(TicketType.YEARLY))) { 
            return validFrom + 365 days;
        } else {
            return validFrom;
        }
    }

    function updatePrices(uint256[][] memory priceMap) public onlyOwner {
        // TODO: Sanity check for x dimension, eg single ticket, daily, weekly, monthly and yearly is fixed. The zones are up to the owner
        _priceMap = priceMap;
        if (paused()) {
            _unpause();
        }

    }

    // TODO: Get number of zones, based on price map

    function getPrice(uint8 ticketType, uint8 zone) public view returns (uint256) {
        return _priceMap[zone][ticketType];
    }

    function buyTicket(uint8 zone, uint8 amount) external payable whenNotPaused {
        uint256 price = getPrice(uint8(TicketType.SINGLE_TICKET), zone);

        require(msg.value >= (price * amount), "Insufficient funds");

        Ticket ticket = Ticket(ticketAddress);
        for(uint8 i = 0; i < amount; ++i) {                
                ticket.mint(_msgSender(), zone, 0, 0);
        }
    }

    function buyPass(uint8 ticketType, uint8 zone, uint64 validFrom) external payable whenNotPaused {
        uint256 price = getPrice(ticketType, zone);

        require(ticketType > uint8(TicketType.SINGLE_TICKET), "Invalid type");
        require(msg.value >= (price), "Insufficient funds");

        Ticket ticket = Ticket(ticketAddress);

        uint64 validTo = _getValidTo(validFrom, ticketType);
        ticket.mint(_msgSender(), zone, validFrom, validTo);
    }


}