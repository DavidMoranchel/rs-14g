import React from "react";

// Components
import Greet from "../../components/Greet";
import Counter from "../../components/Counter";

export default function Home() {
	return (
		<div>
			<Greet firstName="Fego" />
			<Counter />
		</div>
	);
}
