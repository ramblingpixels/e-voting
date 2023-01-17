import React from "react";
import { useParams } from "react-router-dom";
import Web3 from "web3";
import contract from "truffle-contract";
import electionArtifcat from "../build/contracts/Election.json"


const Voting = () => {
	const wa = useParams().walletAddress;
	async function castVote() {
		
	}
	return (
		<div className="voting-body">
			<div className="party-parent">
				<div className="party1">
					<h1 className="party-title">AAP</h1>
					<button className="btn vote" onClick={castVote}>VOTE</button>
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
};

export default Voting;
