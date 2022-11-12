import "./App.css";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
        	<BrowserRouter>
             <Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/dashboard" element={<Dashboard/>}/>
             </Routes>
           </BrowserRouter>
			
		</div>
	);
}

export default App;
