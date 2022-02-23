import React from 'react';
import photo from '../images/katie-zaferes.png';

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

function Card() {
	return (
		<div className="card">
			<div className="card--photo">
				<div className="tag sold-out">SOLD OUT</div>
				{/* <div className="card--online">SOLD OUT</div> */}
				<img src={photo} alt="" />
			</div>
			<div className="card--info">
				<div className="rating">
					<div className="rating--level">5.0</div>
					<div className="rating--total">(6)</div>
					<div className="rating--location">• USA</div>
				</div>
				<div className="name">Life lessons with Katie Zaferes</div>
				<div className="price">
					<strong>From $136</strong> / person
				</div>
			</div>
		</div>
	);
}

export default Card;
