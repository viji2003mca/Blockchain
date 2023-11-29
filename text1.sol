// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Text{
  // uint32 register_no;
string username;
//function addNumber(uint32 _register_no) public {
    function addNumber(string memory _username) public {
    //    register_no = _register_no;
username = _username;
    }
//    function getValue() public view returns(uint32){
function getValue() public view returns(string memory){
return username;
//return register_no;
}

}