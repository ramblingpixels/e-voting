import React from "react";

const Voting = () => {
	return (
		<div className="voting-body">
			<div className="party-parent">
				<div className="party1">
					<h1 className="party-title">AAP</h1>
					<button className="btn vote">VOTE</button>
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
