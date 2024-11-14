import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar">
			<ul className="navbar-list">
				<li className="navbar-item">
					<a href="/">Journal</a>
				</li>
				<li className="navbar-item">
					<a href="/about">Chat</a>
				</li>
				<li className="navbar-item">
					<a href="/services">Tips</a>
				</li>
				<li className="navbar-item">
					<a href="/contact">About</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
