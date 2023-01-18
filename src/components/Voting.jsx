import React, { useState, useEffect } from "react";
import Web3 from "web3";
import ElectionContractBuild from './Election.json';

const Voting = () => {
 async function castVote(e) {
		
	  }
		useEffect(() => {
		loadBlockchainData();
		}, []);

  async function loadBlockchainData() {
	  const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
	  const accounts = await web3.eth.getAccounts();	  
	  const networkId = await web3.eth.net.getId();
	  const electionContract = new web3.eth.Contract(ElectionContractBuild.abi, ElectionContractBuild.networks[networkId]);
	  electionContract.setProvider(web3.givenProvider);
	  console.log(electionContract);

	  
	}

    return (
<div className="voting-body">
			<div className="party-parent">
				<div className="party1">
					<h1 className="party-title">AAP</h1>
					<button className="btn vote" value="1" onClick = {castVote} >VOTE</button>
				</div>
				<div className="party2">
					<h1 className="party-title">BJP</h1>
					<button className="btn vote" value="2" onClick = {castVote}>VOTE</button>
				</div>
				<div className="party3">
					<h1 className="party-title">Congress</h1>
					<button className="btn vote" value="3" onClick = {castVote}>VOTE</button>
				</div>
			</div>
		</div>
    );
  
}

export default Voting;