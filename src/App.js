import logo from "./logo.svg";
import "./App.css";

// Components
import Greeting from "./components/Greeting";
import Calculator from "./components/Calculator";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>

				<Greeting />
				{/* <Calculator firstValue={1} secondValue={2} operator={"suma"} />
				<Calculator
					firstValue={4}
					secondValue={2}
					operator={"multiplicacion"}
				/>
				<Calculator firstValue={10} secondValue={2} operator={"restass"} /> */}
			</header>
		</div>
	);
}

export default App;
