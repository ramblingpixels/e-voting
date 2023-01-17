import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Dashboard = () => {
	const wa = useParams().walletAddress;
	return (
		<div>
			<nav className="navbar">
				<h1 className="db-welcome">Welcome, {wa} </h1>
				<div>
					<Link to="/" className="logout btn">
						Logout
					</Link>
				</div>
			</nav>
			<div className="election-card">
				<div className="card-content">
					<h1 className="card-title">Delhi MCD Elections 2022</h1>
					<div className="vote-db-btn">
						<Link to='/voting' className="vote-db btn">
							VOTE
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
