import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import expData from './data';

function App() {
	const experiences = expData.map((exp) => {
		// console.log(exp.coverImg);
		return <Card key={exp.id} {...exp} />;
	});
	return (
		<div className="main">
			<Navbar />
			<Hero />
			<section className="cards-container">{experiences}</section>
		</div>
	);
}

export default App;
