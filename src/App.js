import "./App.css";
import Weather from "./Weather";

export default function App() {
	return (
		<div>
			<div className="App">
				<Weather defaultCity="KYIV" />
			</div>
			<footer className="MyGit">
				This app was built by{" "}
				<a
					href="https://olhaabrosimova.netlify.app/about.html"
					target="_blank"
					rel="noreferrer"
				>
					Olha Abrosimova
				</a>{" "}
				and it is open-sourced on{" "}
				<a
					href="https://github.com/OlhaAbrosimova/abr-react-weather-2908"
					target="_blank"
					rel="noreferrer"
				>
					{" "}
					GitHub
				</a>
			</footer>
		</div>
	);
}
