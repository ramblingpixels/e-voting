import React, { Component,useState, useEffect } from "react";
import Web3 from "web3";
import ElectionContractBuild from '../build/contracts/Election.json';


const contractAddress = "0x4D670BAF0b71611fda6F39aa2d91c5c373fa352C";


class Voting extends Component {

  componentDidMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
	  const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
	  const accounts = await web3.eth.getAccounts();	  
	  this.setState({ account: accounts[0] });
	  const networkId = await web3.eth.net.getId();
	//    const nftContract = new web3.eth.Contract(NFTContractBuild.abi,NFTContractBuild.networks[networkId].address
	  
  }

  constructor(props) {
    super(props)
    this.state = { account: '' }
  }

  render() {
    return (
<div className="voting-body">
			<div className="party-parent">
				<div className="party1">
					<h1 className="party-title">AAP</h1>
					<button className="btn vote"  >VOTE</button>
				</div>
				<div className="party2">
					<h1 className="party-title">BJP</h1>
					<button className="btn vote">VOTE</button>
				</div>
				<div className="party3">
					<h1 className="party-title">Congress</h1>
					<button className="btn vote">VOTE</button>
				</div>
			</div>
		</div>
    );
  }
}

export default Voting;