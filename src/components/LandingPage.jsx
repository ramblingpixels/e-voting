import React, { useState } from "react";
import Svimg from "../Misc/Svimg";
import Web3 from "web3";

let tokenAbi = [
{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
];
const web3 = new Web3('https://bsc-dataseed1.binance.org:443');
const LandingPage = () => {
	const [walletAddress, setWalletAddress] = useState("");

	async function requestAccount() {
		console.log("Connect Wallet");

		if (window.ethereum) {
			try {
				console.log("Connected");
				const account = web3.eth.accounts;
				setWalletAddress(account.givenProvider.selectedAddress);
				console.log(`Wallet: ${walletAddress}`);
				const contract = new web3.eth.Contract(tokenAbi,"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c");
				console.log({ contract });
			
			} catch (error) {
				console.log("Error");
			}
		} else {
			console.log("Not connected");
		}
	}

	async function connectWallet() {
		if (typeof window.ethereum != "undefined") {
			await requestAccount();
		}
	}

	return (
		<div>
			<Svimg/>
			<div className="buttons">
				<button className="login">Login</button>
				<button className="signup" onClick={connectWallet}>
					Connect Metamask Wallet
				</button>
				{/* <h3>Wallet: {walletAddress}</h3> */}
			</div>

			<div className="header_text">
				The future of <span className="e_voting_text">E-Voting</span> is here!
			</div>
		</div>
	);
};

export default LandingPage;
