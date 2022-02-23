import React from 'react';

function Card(props) {
	return (
		<div className="card">
			<div className="card--photo">
				{/* <div className="tag sold-out">SOLD OUT</div> */}
				{/* <div className="card--online">ONLINE</div> */}
				<img src={`../images/${props.img}`} alt="" />
			</div>
			<div className="card--info">
				<div className="rating">
					<div className="rating--level">{props.rating}</div>
					<div className="rating--total">({props.total})</div>
					<div className="rating--location">• {props.location}</div>
				</div>
				<div className="name">{props.name}</div>
				<div className="price">
					<strong>From ${props.price}</strong> / person
				</div>
			</div>
		</div>
	);
}

export default Card;
