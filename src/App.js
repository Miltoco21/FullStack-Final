import { BrowserRouter,Route, Routes, Navigate } from "react-router-dom";
import Main from "./Components/Main/Main";
import Registro from "./Components/Registro/Registro";
import Login from "./Components/Login/Login";

function App() {
	const user = localStorage.getItem("token");

	return (
    <BrowserRouter>
    <Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/registro" exact element={<Registro />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
    </BrowserRouter>
		
	);
}

export default App;