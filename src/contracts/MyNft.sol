// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MyToken is ERC721, ERC721URIStorage {
    uint256 private _nextTokenId;

    constructor()
        ERC721("MyNft", "NFT")
    {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://teal-still-rat-339.mypinata.cloud/ipfs/QmNTKwUU2svriCMhTe85QqLiVY9ZAkFZkPTTR8uzt68NbL";
    }

    function safeMint(address to, string memory uri) public {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return _baseURI();
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
