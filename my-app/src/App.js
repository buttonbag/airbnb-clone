import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

function App() {
	return (
		<div className="main">
			<Navbar />
			<Hero />
			<Card
				img="katie-zaferes.png"
				rating={5.0}
				total={6}
				location="USA"
				name="Life lessons with Katie Zaferes"
				price={136}
			/>
		</div>
	);
}

export default App;
