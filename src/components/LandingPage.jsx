import React, { useState } from "react";
import Svimg from "../Misc/Svimg";

const LandingPage = () => {
	const [walletAddress, setWalletAddress] = useState("");

	async function requestAccount() {
		console.log("Connect Wallet");

		if (window.ethereum) {
			console.log("Connected");

			try {
				const accounts = await window.ethereum.request({
					method: "eth_requestAccounts",
				});
				setWalletAddress(accounts[0]);
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

			const provider = new ethers.provider.Web3Provider(window.ethereum);
		}
	}

	return (
		<div>
			<Svimg/>
			<div className="buttons">
				<button className="login">Login</button>
				<button className="signup" onClick={requestAccount}>
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
