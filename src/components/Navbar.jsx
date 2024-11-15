import React from "react";
import "../styles/navbar.css";
import "../index.css";

const Navbar = () => {
	return (
		<div className="navbar-container">
			<a href="/" className="logo">
				DokiDoki
			</a>
			<div className="navbar-links">
				{" "}
				{/* Container for the links */}
				<a href="/">Journal</a>
				<a href="/">Chat</a>
				<a href="/">Tips</a>
				<a href="/">About</a>
				<a href="./signin">Sign in</a>
			</div>
		</div>
	);
};

export default Navbar;
