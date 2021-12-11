import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

// Components
import UserName from "./components/UserName";

const _users = [
	{
		id: 1,
		firstName: "Selene",
		lastName: "Chavez",
	},
	{
		id: 2,
		firstName: "Omar",
		lastName: "Mijangos",
	},
	{
		id: 3,
		firstName: "Luis",
		lastName: "Balán",
	},
	{
		id: 4,
		firstName: "Odon",
		lastName: "Balán",
	},
];

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		// await fetch()
		setTimeout(() => {
			const response = _users;
			setUsers(response);
		}, 3000);
	}, []);

	const usersUI = users.map(({ id, firstName, lastName }) => (
		<UserName key={id} firstName={firstName} lastName={lastName} />
	));

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				{usersUI}
			</header>
			<UserName firstName={"Fuera del"} lastName={"map"} />
		</div>
	);
}

export default App;
