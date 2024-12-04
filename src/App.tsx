import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "#utils/routes";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map((route) => (
					<Route key={route.id} path={route.path} element={route.load} />
				))}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
