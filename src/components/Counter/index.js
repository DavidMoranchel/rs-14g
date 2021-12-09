/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";

// Styles
import "./Counter.css";

export default function Counter() {
	const [counter, setCounter] = useState(0);

	return (
		<div>
			<p className={counter % 2 === 0 ? "text-even" : "text-odd"}>
				Counter: {counter}
			</p>
			<div className="container">
				<button className="btn" onClick={() => setCounter(counter + 1)}>
					Add
				</button>
				<button className="btn" onClick={() => setCounter(counter - 1)}>
					Substract
				</button>
			</div>
		</div>
	);
}
