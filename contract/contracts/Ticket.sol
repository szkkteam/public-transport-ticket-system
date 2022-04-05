// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

//import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

import "./IConsumable.sol";

/*
import "./IERC721Receiver.sol";
import "./extensions/IERC721Metadata.sol";
import "../../utils/Address.sol";
import "../../utils/Context.sol";
import "../../utils/Strings.sol";
import "../../utils/introspection/ERC165.sol";
*/

contract Ticket is Ownable, ERC721Enumerable, IConsumable {

    struct TicketMeta {
        uint8 used;
        uint8 zone;
    }

    mapping(uint256 => TicketMeta) private _ticketMeta;

    constructor() ERC721("Ticket", "TCKT") {
         
    }

    function mint(uint8 zone) external onlyOwner {

        uint256 tokenId = totalSupply();
        _safeMint(_msgSender(), tokenId);
        // If we reach this point, the ticket is minted (no revert), we can add the ticket meta
        TicketMeta memory meta = _ticketMeta[tokenId];
        meta.zone = zone;
        meta.used = 0;

    }

    function isValid(uint256 id) external view override returns (bool) {
        TicketMeta memory meta = _ticketMeta[id];
        return meta.used != 0;
    }

}