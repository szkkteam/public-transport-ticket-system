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

contract Pass is Ownable, ERC721Enumerable, IConsumable {

    struct PassMeta {
        uint64 validFrom;
        uint64 validTo;
        uint8 zone;
    }

    mapping(uint256 => PassMeta) private _passMeta;

    constructor() ERC721("Pass", "PASS") {
         
    }

    function mint(uint64 validFrom, uint64 validTo, uint8 zone) external onlyOwner {

        uint256 tokenId = totalSupply();
        _safeMint(_msgSender(), tokenId);
        // If we reach this point, the ticket is minted (no revert), we can add the ticket meta
        PassMeta memory meta = _passMeta[tokenId];
        meta.validFrom = validFrom;
        meta.validTo = validTo;
        meta.zone = zone;

    }

    function isValid(uint256 id) external view override returns (bool) {
        PassMeta memory meta = _passMeta[id];
        uint64 timestamp = uint64(block.timestamp);

        return (meta.validFrom <= timestamp) && (meta.validTo >= timestamp);
    }

}