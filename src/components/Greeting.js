import React, { useState, useEffect } from "react";

const capitalizeWord = (word) => {
	if (!word) {
		return "";
	}
	return word[0].toUpperCase() + word.slice(1).toLowerCase();
};

function Greeting({ firstName, lastName = "" }) {
	const [fakeName, setFakeName] = useState("Manuel Ramos");
	const [isLoading, setIsLoading] = useState(true);
	console.log("Hola el componente se esta montando");

	useEffect(() => {
		setTimeout(() => {
			console.log("Hola el componente ya cargo");
			setIsLoading(false);
		}, 4000);
	}, []);

	const _firstName = capitalizeWord(firstName);
	const _lastName = capitalizeWord(lastName);

	return (
		<div>
			<h1>Hola {fakeName}</h1>
			<span>
				{isLoading ? "El componente esta cargando" : "El componente ya cargo"}
			</span>
		</div>
	);
}

export default Greeting;
