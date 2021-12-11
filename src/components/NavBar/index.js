import React, { useState } from "react";

// Styles
import "./NavBar.css";

function NavBar() {
	const [active, setActive] = useState(3);

	const handleClick = (itemID) => {
		setActive(itemID);
	};

	const checkActive = (itemID) => (active === itemID ? "li-active" : "");

	let content = "";
	switch (active) {
		case 1:
			content = "Holi 1";
			break;
		case 2:
			content = "Holi 2";
			break;
		case 3:
			content = "Holi 3";
			break;
		default:
			content = "No holi";
			break;
	}

	return (
		<div>
			<ul>
				<li className={checkActive(1)} onClick={() => handleClick(1)}>
					Item 1
				</li>
				<li className={checkActive(2)} onClick={() => handleClick(2)}>
					Item 2
				</li>
				<li className={checkActive(3)} onClick={() => handleClick(3)}>
					Item 3
				</li>
				<li className={checkActive(4)} onClick={() => handleClick(4)}>
					Item 4
				</li>
			</ul>
			<div>
				<h1>{content}</h1>
			</div>
		</div>
	);
}

export default NavBar;
