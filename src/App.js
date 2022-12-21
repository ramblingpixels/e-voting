import "./App.css";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Voting from "./components/Voting";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/voting" element={<Voting />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
