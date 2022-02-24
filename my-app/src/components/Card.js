import React from 'react';

function Card(props) {
	let badgeText
	if (props.openSpots === 0) {
		badgeText = "sold out"
	} else if (props.location === "Online") {
		badgeText = "online"
	}


	return (
		<div className="card" key={props.id}>
			<div className="card--photo">
				{badgeText && <div className="card--badge">{badgeText}</div>}
				<img src={require(`../images/${props.coverImg}`)} alt="" />
			</div>
			<div className="card--info">
				<div className="rating">
					<div className="rating--level">{props.stats.rating}</div>
					<div className="rating--total">({props.stats.reviewCount})</div>
					<div className="rating--location">• {props.location}</div>
				</div>
				<div className="title">{props.title}</div>
				<div className="price">
					<strong>From ${props.price}</strong> / person
				</div>
			</div>
		</div>

	);
}

export default Card;
