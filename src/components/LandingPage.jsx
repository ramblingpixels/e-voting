import React, { useState } from "react";
import Svimg from "../Misc/Svimg";
import Web3 from "web3";

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

				const minABI = [{
                  constant: true,
                  inputs: [{name: "_owner", type: "address"}],
                  name: "balanceOf",
                  outputs: [{name: "balance", type: "uint256"}],
                  type: "function",
                 },
			    ];
				
				const tokenAddress = "0x2B09d47D550061f995A3b5C6F0Fd58005215D7c8";
				const contract = new web3.eth.Contract(minABI, tokenAddress);
				contract.defautAccount = walletAddress;
				console.log({ contract });
				const result = await contract.methods.balanceOf(walletAddress).call()
				console.log(result);

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
			</div>

			<div className="header_text">
				The future of <span className="e_voting_text">E-Voting</span> is here!
			</div>
		</div>
	);
};

export default LandingPage;
