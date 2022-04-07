// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

//import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

/*
import "./IERC721Receiver.sol";
import "./extensions/IERC721Metadata.sol";
import "../../utils/Address.sol";
import "../../utils/Context.sol";
import "../../utils/Strings.sol";
import "../../utils/introspection/ERC165.sol";
*/

contract Ticket is Ownable, ERC721Enumerable {

    struct TicketMeta {
        uint8 used;
        uint8 zone;
        uint64 validFrom;
        uint64 validTo;
    }

    mapping(uint256 => TicketMeta) private _ticketMeta;

    constructor() ERC721("Ticket", "TCKT") {
    }

    function mint(address to, uint8 zone, uint64 validFrom, uint64 validTo) external onlyOwner {
      
        uint256 tokenId = totalSupply();
        _safeMint(to, tokenId);
        // If we reach this point, the ticket is minted (no revert), we can add the ticket meta
        TicketMeta memory meta = _ticketMeta[tokenId];
        meta.zone = zone;
        meta.used = 0;
        meta.validFrom = validFrom;
        meta.validTo = validTo;

    }

    function isValid(uint256 id) external view returns (bool) {
        TicketMeta memory meta = _ticketMeta[id];
        // Is it a single use ticket?
        if (meta.validFrom == 0 && meta.validTo == 0) {
            return meta.used != 0;
        } else {
            uint64 timestamp = uint64(block.timestamp);
            return (meta.validFrom <= timestamp) && (meta.validTo >= timestamp);
        }
    }

    

}