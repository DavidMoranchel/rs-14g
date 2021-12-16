import React from "react";
import { useState } from "react/cjs/react.development";

// CSS
import "./UsersNew.css";

// Input
import Input from "../../components/Input";

export default function UsersNew() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	return (
		<div className="container flex-col">
			<h1>Crea un usuario</h1>
			<form>
				<Input
					id="firstName"
					label="First Name"
					value={firstName}
					setValue={setFirstName}
				/>
				<Input
					id="lastName"
					label="Last Name"
					value={lastName}
					setValue={setLastName}
				/>
			</form>
		</div>
	);
}
