import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Intro from "./components/Intro.jsx";
import Calendar from "./components/Calendar.jsx";
import Signin from "./components/Signin.jsx";
import Footer from "./components/Footer.jsx";
// import { Routes, Route } from "react-router-dom";

function App() {
	// const [count, setCount] = useState(0);

	return (
		<>
			<Navbar />
			<Intro />
			{/* <Routes>
				<Route path="/" element={<Signin />} />
			</Routes> */}
			<Footer />
		</>
	);
}

export default App;
