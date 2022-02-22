import React from 'react';
import logo from '../images/logo.svg';

function Navbar() {
	return (
		<nav>
			<img src={logo} alt="airbnb" className="nav--logo" />
		</nav>
	);
}

export default Navbar;
