import React, { useState, useEffect } from "react";
import Svimg from "../Misc/Svimg";
import Web3 from "web3";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const web3 = new Web3("https://bsc-dataseed1.binance.org:443");
const LandingPage = () => {
	const [walletAddress, setWalletAddress] = useState("");
	useEffect(() => {
                console.log(`Wallet: ${walletAddress}`);
                }, [walletAddress]);
	const navigate = useNavigate();
	async function requestAccount() {
		console.log("Connect Wallet");

		if (window.ethereum) {
			try {
				await window.ethereum.request({
					method: "eth_requestAccounts",
				});
				console.log("Connected");
                
				const account = web3.eth.accounts;				
				await setWalletAddress(account.givenProvider.selectedAddress);
				
				const minABI = [
					{
						constant: true,
						inputs: [{ name: "_owner", type: "address" }],
						name: "balanceOf",
						outputs: [{ name: "balance", type: "uint256" }],
						type: "function",
					},
				];

				const tokenAddress = "0x2B09d47D550061f995A3b5C6F0Fd58005215D7c8";
				const contract = new web3.eth.Contract(minABI, tokenAddress);
				contract.defautAccount = walletAddress;
				const result = await contract.methods.balanceOf(walletAddress).call();
				if (result > 0){
					navigate(`/dashboard/${walletAddress}`);
				} else {
					alert("You don't have SBT");
				}
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
			<Svimg />
			<div className="buttons">
				<Link className="signup btn" onClick={connectWallet}>
					Connect Metamask Wallet
				</Link>
			</div>

			<div className="header_text">
				The future of <span className="e_voting_text">E-Voting</span> is here!
			</div>
		</div>
	);
};

export default LandingPage;

