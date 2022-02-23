import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Cards';

function App() {
	return (
		<div className="main">
			<Navbar />
			<Hero />
			<Cards />
		</div>
	);
}

export default App;
