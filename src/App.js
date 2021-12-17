import "./App.css";

import { Outlet } from "react-router-dom";

function App() {
	return (
		<div className="main">
			<nav className="main-nav">
				{/* <a className="link">Link 1</a>
				<a className="link">Link 1</a>
				<a className="link">Link 1</a>
				<a className="link">Link 1</a> */}
			</nav>
			<div className="main-content">
				<Outlet />
			</div>
		</div>
	);
}

export default App;
